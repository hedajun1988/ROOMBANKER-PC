import { defineConfig } from 'vitepress';

const guide = [
  ['dashboard', 'Dashboard'], ['companies', 'Companies'], ['hubs-list-and-add', 'Hubs and registration'],
  ['alarms', 'Alarm messages'], ['device-messages', 'Device messages'], ['operation-logs', 'PC operation log'],
  ['accounts', 'Accounts'], ['permissions', 'Permissions'], ['deactivated-accounts', 'Deactivated accounts'],
  ['notifications', 'Notifications'], ['announcements', 'Announcements'], ['settings', 'Settings']
] as const;

const hubGuide = [
  ['hub-detail', 'Hub details'], ['hub-remote-config', 'Remote configuration'], ['hub-subdevices', 'Sub-devices']
] as const;

function sidebar(prefix: string, chinese = false) {
  const label = (en: string, zh: string) => chinese ? zh : en;
  return [
    { text: label('Getting started', '开始使用'), items: [
      { text: label('Login', '登录'), link: `${prefix}/getting-started/login` },
      { text: label('Registration', '注册'), link: `${prefix}/getting-started/registration` },
      { text: label('Password recovery', '找回密码'), link: `${prefix}/getting-started/password-recovery` },
      { text: label('Navigation and permissions', '导航与权限'), link: `${prefix}/getting-started/navigation-and-permissions` }
    ] },
    {
      text: label('Guide', '功能指南'),
      items: guide.map(([slug, en]) => slug === 'hubs-list-and-add'
        ? {
            text: chinese ? zhTitle(en) : en,
            link: `${prefix}/guide/${slug}`,
            collapsed: true,
            items: hubGuide.map(([childSlug, childEn]) => ({
              text: chinese ? zhTitle(childEn) : childEn,
              link: `${prefix}/guide/${childSlug}`
            }))
          }
        : { text: chinese ? zhTitle(en) : en, link: `${prefix}/guide/${slug}` })
    },
    { text: label('Appendix', '附录'), items: [
      { text: label('Roles and permissions', '角色与权限'), link: `${prefix}/appendix/roles-and-permissions` },
      { text: label('Operation safety', '操作安全'), link: `${prefix}/appendix/operation-safety` },
      { text: label('Version and capabilities', '版本与功能边界'), link: `${prefix}/appendix/version-and-capabilities` },
      { text: label('Troubleshooting', '故障排查'), link: `${prefix}/appendix/troubleshooting` }
    ] }
  ];
}

function zhTitle(title: string) {
  return ({ Dashboard: '仪表盘', Companies: '公司', 'Hubs and registration': 'Hub 与注册', 'Hub details': 'Hub 详情', 'Remote configuration': '远程配置', 'Sub-devices': '子设备', 'Alarm messages': '报警消息', 'Device messages': '设备消息', 'PC operation log': 'PC 操作日志', Accounts: '账号', Permissions: '权限', 'Deactivated accounts': '已停用账号', Notifications: '通知', Announcements: '公告', Settings: '设置' } as Record<string, string>)[title] || title;
}

export default defineConfig({
  base: process.env.DOCS_BASE || '/ROOMBANKER-PC/',
  title: 'ROOMBANKER-PC',
  description: 'Wireless Security Management Platform manual',
  cleanUrls: true,
  locales: {
    en: { label: 'English', lang: 'en-US', themeConfig: { nav: [{ text: 'English', link: '/en/' }, { text: '中文', link: '/zh/' }], sidebar: sidebar('/en') } },
    zh: { label: '简体中文', lang: 'zh-CN', themeConfig: { nav: [{ text: '中文', link: '/zh/' }, { text: 'English', link: '/en/' }], sidebar: sidebar('/zh', true) } }
  },
  themeConfig: { logo: '/images/brand/roombanker-mark.svg', socialLinks: [{ icon: 'github', link: 'https://github.com/hedajun1988/ROOMBANKER-PC' }] }
});
