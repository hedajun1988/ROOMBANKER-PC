import { expect, test } from '@playwright/test';
import siteConfig from '../../docs/manual/.vitepress/config';

type SidebarItem = { text?: string; link?: string; collapsed?: boolean; items?: SidebarItem[] };

function collectLinks(items: SidebarItem[]): string[] {
  return items.flatMap((item) => [
    ...(item.link ? [item.link] : []),
    ...collectLinks(item.items || [])
  ]);
}

const locales = siteConfig.locales as Record<string, { themeConfig: { sidebar: SidebarItem[] } }>;
const sidebarLinks = Object.values(locales).flatMap((locale) => collectLinks(locale.themeConfig.sidebar));
const routes = [...new Set(['/', '/en/', '/zh/', ...sidebarLinks])];
const mobileRoutes = [
  '/en/', '/zh/',
  '/en/guide/hubs-list-and-add', '/zh/guide/hubs-list-and-add',
  '/en/guide/hub-remote-config', '/zh/guide/hub-remote-config',
  '/en/guide/settings', '/zh/guide/settings'
];

const hubSidebarCases = [
  {
    locale: 'en',
    guide: 'Guide',
    parent: 'Hubs and registration',
    children: ['Hub details', 'Remote configuration', 'Sub-devices']
  },
  {
    locale: 'zh',
    guide: '功能指南',
    parent: 'Hub 与注册',
    children: ['Hub 详情', '远程配置', '子设备']
  }
];

function guideItems(locale: string) {
  const sidebar = locales[locale].themeConfig.sidebar;
  return sidebar.find((item) => item.text === (locale === 'zh' ? '功能指南' : 'Guide'))?.items || [];
}

function hubItem(locale: string) {
  return guideItems(locale).find((item) => item.link === `/${locale}/guide/hubs-list-and-add`);
}

function hubSidebarItem(page: import('@playwright/test').Page, locale: string) {
  return page.locator(`.VPSidebarItem:has(> .item > a[href="/ROOMBANKER-PC/${locale}/guide/hubs-list-and-add"])`);
}

function sidebarLinkItem(parent: ReturnType<typeof hubSidebarItem>, href: string) {
  return parent.locator(`a[href="${href}"]`).locator('xpath=../..');
}

test('Hub guide pages are grouped below a collapsed linked parent in both locales', () => {
  for (const item of hubSidebarCases) {
    const parent = hubItem(item.locale);
    expect(parent).toEqual({
      text: item.parent,
      link: `/${item.locale}/guide/hubs-list-and-add`,
      collapsed: true,
      items: item.children.map((text, index) => ({
        text,
        link: `/${item.locale}/guide/${['hub-detail', 'hub-remote-config', 'hub-subdevices'][index]}`
      }))
    });
    expect(guideItems(item.locale).map((guideItem) => guideItem.link)).not.toEqual(expect.arrayContaining([
      `/${item.locale}/guide/hub-detail`,
      `/${item.locale}/guide/hub-remote-config`,
      `/${item.locale}/guide/hub-subdevices`
    ]));
  }
});

test('desktop Hub tree stays collapsed until opened and expands for active Hub pages', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/ROOMBANKER-PC/en/guide/settings', { waitUntil: 'domcontentloaded' });

  const parent = hubSidebarItem(page, 'en');
  const details = parent.getByRole('link', { name: 'Hub details', exact: true });
  await expect(parent).toHaveClass(/collapsed/);
  await expect(details).toBeHidden();

  const caret = parent.locator('> .item > .caret');
  await caret.click();
  await expect(parent).not.toHaveClass(/collapsed/);
  await expect(details).toBeVisible();
  await caret.click();
  await expect(parent).toHaveClass(/collapsed/);

  for (const slug of ['hubs-list-and-add', 'hub-detail', 'hub-remote-config', 'hub-subdevices']) {
    await page.goto(`/ROOMBANKER-PC/en/guide/${slug}`, { waitUntil: 'domcontentloaded' });
    await expect(parent).not.toHaveClass(/collapsed/);
    const activeItem = slug === 'hubs-list-and-add'
      ? parent
      : sidebarLinkItem(parent, `/ROOMBANKER-PC/en/guide/${slug}`);
    await expect(activeItem).toHaveClass(/is-active/);
  }
});

test('mobile Hub trees reveal the active child and parent navigation closes the drawer', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });

  for (const item of [
    { locale: 'en', slug: 'hub-remote-config', parent: 'Hubs and registration', child: 'Remote configuration' },
    { locale: 'zh', slug: 'hub-subdevices', parent: 'Hub 与注册', child: '子设备' }
  ]) {
    await page.goto(`/ROOMBANKER-PC/${item.locale}/guide/${item.slug}`, { waitUntil: 'domcontentloaded' });
    await page.locator('.VPLocalNav .menu').click();

    const sidebar = page.locator('.VPSidebar');
    const parent = hubSidebarItem(page, item.locale);
    await expect(sidebar).toHaveClass(/open/);
    await expect(parent).not.toHaveClass(/collapsed/);
    await expect(parent.getByRole('link', { name: item.child, exact: true })).toBeVisible();
    await expect(sidebarLinkItem(parent, `/ROOMBANKER-PC/${item.locale}/guide/${item.slug}`)).toHaveClass(/is-active/);
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(375);

    await parent.getByRole('link', { name: item.parent, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`/ROOMBANKER-PC/${item.locale}/guide/hubs-list-and-add/?$`));
    await expect(sidebar).not.toHaveClass(/open/);
  }
});

test('published bilingual manual has no broken pages, assets, or base links', async ({ page, request }) => {
  test.setTimeout(120_000);
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  const discoveredInternalLinks = new Set<string>();
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });
  page.on('pageerror', (error) => pageErrors.push(error.message));

  for (const route of routes) {
    const response = await request.get(`/ROOMBANKER-PC${route}`);
    expect(response.status(), route).toBeLessThan(400);
    await page.goto(`/ROOMBANKER-PC${route}`, { waitUntil: 'domcontentloaded' });
    await expect(page.locator(route === '/' ? '.VPHero' : 'main')).toBeVisible({ timeout: 10_000 });
    await expect.poll(async () => page.locator('img').evaluateAll((nodes) => nodes.every((image) => image.complete && image.naturalWidth > 0)), {
      message: `${route}: document images did not load`,
      timeout: 10_000
    }).toBeTruthy();
    const images = await page.locator('img').evaluateAll((nodes) => nodes.map((image) => ({
      complete: image.complete,
      naturalWidth: image.naturalWidth,
      src: image.getAttribute('src') || ''
    })));
    for (const image of images) {
      expect(image.complete, `${route}: ${image.src}`).toBeTruthy();
      expect(image.naturalWidth, `${route}: ${image.src}`).toBeGreaterThan(0);
    }
    const internalLinks = await page.locator('a[href]').evaluateAll((nodes) => nodes
      .map((link) => link.getAttribute('href') || '')
      .filter((href) => href.startsWith('/')));
    for (const href of internalLinks) {
      expect(href, `${route}: ${href}`).toMatch(/^\/ROOMBANKER-PC\//);
      expect(href, `${route}: malformed locale link`).not.toMatch(/\/(?:zh\/en|en\/zh)(?:\/|$)/);
      discoveredInternalLinks.add(href);
    }
  }

  for (const href of discoveredInternalLinks) {
    const response = await request.get(href);
    expect(response.status(), `discovered link ${href}`).toBeLessThan(400);
  }

  expect(consoleErrors).toEqual([]);
  expect(pageErrors).toEqual([]);
});

test('manual pages fit a 375px reading viewport', async ({ page }) => {
  test.setTimeout(120_000);
  await page.setViewportSize({ width: 375, height: 812 });
  for (const route of mobileRoutes) {
    await page.goto(`/ROOMBANKER-PC${route}`, { waitUntil: 'domcontentloaded' });
    await expect(page.locator('main')).toBeVisible({ timeout: 10_000 });
    const dimensions = await page.evaluate(() => ({
      width: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      bodyScrollWidth: document.body.scrollWidth
    }));
    expect(dimensions.scrollWidth, `${route}: html overflow`).toBeLessThanOrEqual(dimensions.width);
    expect(dimensions.bodyScrollWidth, `${route}: body overflow`).toBeLessThanOrEqual(dimensions.width);
  }
});

for (const viewport of [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 375, height: 812 }
]) {
  test(`manual home shows language actions in the ${viewport.name} viewport`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto('/ROOMBANKER-PC/', { waitUntil: 'domcontentloaded' });

    const actions = page.locator('.VPHero .actions');
    await expect(actions).toBeVisible();

    for (const [name, href] of [
      ['English', '/ROOMBANKER-PC/en/'],
      ['简体中文', '/ROOMBANKER-PC/zh/']
    ]) {
      const link = actions.getByRole('link', { name, exact: true });
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('href', href);
      const box = await link.boundingBox();
      expect(box, `${name}: missing viewport bounds`).not.toBeNull();
      expect(box!.x, `${name}: left edge outside viewport`).toBeGreaterThanOrEqual(0);
      expect(box!.y, `${name}: top edge outside viewport`).toBeGreaterThanOrEqual(0);
      expect(box!.x + box!.width, `${name}: right edge outside viewport`).toBeLessThanOrEqual(viewport.width);
      expect(box!.y + box!.height, `${name}: bottom edge outside viewport`).toBeLessThanOrEqual(viewport.height);
    }
  });
}

test('remote-config confirmation tables retain four outcome columns', async ({ page }) => {
  const pages = [
    {
      route: '/en/guide/hub-remote-config',
      transferAlt: 'Super Admin transfer confirmation',
      restartAlt: 'Restart Hub confirmation',
      transferOutcome: 'exchanges role',
      restartOutcome: 'Hub status and monitoring'
    },
    {
      route: '/zh/guide/hub-remote-config',
      transferAlt: '超级管理员转移确认',
      restartAlt: '重启 Hub 确认',
      transferOutcome: '交换角色',
      restartOutcome: 'Hub 状态和监控结果'
    }
  ];

  for (const item of pages) {
    await page.goto(`/ROOMBANKER-PC${item.route}`, { waitUntil: 'domcontentloaded' });
    await expect(page.locator('main')).toBeVisible({ timeout: 10_000 });
    const transferTable = page.locator(`img[alt^="${item.transferAlt}"]`).locator('xpath=following::table[1]');
    const restartTable = page.locator(`img[alt^="${item.restartAlt}"]`).locator('xpath=following::table[1]');

    for (const table of [transferTable, restartTable]) {
      await expect(table.locator('thead th')).toHaveCount(4);
      const rows = table.locator('tbody tr');
      for (let index = 0; index < await rows.count(); index += 1) {
        await expect(rows.nth(index).locator('td')).toHaveCount(4);
      }
    }

    await expect(transferTable.locator('tbody tr').first().locator('td').nth(3)).toContainText(item.transferOutcome);
    await expect(restartTable.locator('tbody tr').last().locator('td').nth(3)).toContainText(item.restartOutcome);
  }
});

test('operation-log tables name the keyword and date-range controls in both languages', async ({ page }) => {
  for (const item of [
    { locale: 'en', keyword: 'Keyword', dateRange: 'Date range' },
    { locale: 'zh', keyword: '关键词', dateRange: '日期范围' }
  ]) {
    await page.goto(`/ROOMBANKER-PC/${item.locale}/guide/operation-logs`, { waitUntil: 'domcontentloaded' });
    const table = page.locator('img[src$="/images/pages/operation-logs.png"]').locator('xpath=following::table[1]');
    await expect(table.locator('tbody tr').nth(1).locator('td').nth(1)).toHaveText(item.keyword);
    await expect(table.locator('tbody tr').nth(2).locator('td').nth(1)).toHaveText(item.dateRange);
  }
});
