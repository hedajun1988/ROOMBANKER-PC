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

const labels = {
  en: { start: 'Getting started', login: 'Login', registration: 'Registration', recovery: 'Password recovery', navigation: 'Navigation and permissions', guide: 'Guide', appendix: 'Appendix', roles: 'Roles and permissions', safety: 'Operation safety', capabilities: 'Version and capabilities', troubleshooting: 'Troubleshooting', titles: {} },
  zh: { start: '开始使用', login: '登录', registration: '注册', recovery: '找回密码', navigation: '导航与权限', guide: '功能指南', appendix: '附录', roles: '角色与权限', safety: '操作安全', capabilities: '版本与功能边界', troubleshooting: '故障排查', titles: { Dashboard: '仪表盘', Companies: '公司', 'Hubs and registration': 'Hub 与注册', 'Hub details': 'Hub 详情', 'Remote configuration': '远程配置', 'Sub-devices': '子设备', 'Alarm messages': '报警消息', 'Device messages': '设备消息', 'PC operation log': 'PC 操作日志', Accounts: '账号', Permissions: '权限', 'Deactivated accounts': '已停用账号', Notifications: '通知', Announcements: '公告', Settings: '设置' } },
  tr: { start: 'Başlangıç', login: 'Oturum açma', registration: 'Kayıt', recovery: 'Parola kurtarma', navigation: 'Gezinme ve izinler', guide: 'Kılavuz', appendix: 'Ek', roles: 'Roller ve izinler', safety: 'İşlem güvenliği', capabilities: 'Sürüm ve özellikler', troubleshooting: 'Sorun giderme', titles: { Dashboard: 'Gösterge paneli', Companies: 'Şirketler', 'Hubs and registration': 'Hub’lar ve kayıt', 'Hub details': 'Hub ayrıntıları', 'Remote configuration': 'Uzaktan yapılandırma', 'Sub-devices': 'Alt cihazlar', 'Alarm messages': 'Alarm mesajları', 'Device messages': 'Cihaz mesajları', 'PC operation log': 'PC işlem günlüğü', Accounts: 'Hesaplar', Permissions: 'İzinler', 'Deactivated accounts': 'Devre dışı bırakılmış hesaplar', Notifications: 'Bildirimler', Announcements: 'Duyurular', Settings: 'Ayarlar' } }
} as const;

function sidebar(prefix: string, locale: keyof typeof labels) {
  const label = labels[locale];
  const title = (value: string) => label.titles[value as keyof typeof label.titles] || value;
  return [
    { text: label.start, items: [
      { text: label.login, link: `${prefix}/getting-started/login` },
      { text: label.registration, link: `${prefix}/getting-started/registration` },
      { text: label.recovery, link: `${prefix}/getting-started/password-recovery` },
      { text: label.navigation, link: `${prefix}/getting-started/navigation-and-permissions` }
    ] },
    {
      text: label.guide,
      items: guide.map(([slug, en]) => slug === 'hubs-list-and-add'
        ? {
            text: title(en),
            link: `${prefix}/guide/${slug}`,
            collapsed: true,
            items: hubGuide.map(([childSlug, childEn]) => ({
              text: title(childEn),
              link: `${prefix}/guide/${childSlug}`
            }))
          }
        : { text: title(en), link: `${prefix}/guide/${slug}` })
    },
    { text: label.appendix, items: [
      { text: label.roles, link: `${prefix}/appendix/roles-and-permissions` },
      { text: label.safety, link: `${prefix}/appendix/operation-safety` },
      { text: label.capabilities, link: `${prefix}/appendix/version-and-capabilities` },
      { text: label.troubleshooting, link: `${prefix}/appendix/troubleshooting` }
    ] }
  ];
}

export default defineConfig({
  base: process.env.DOCS_BASE || '/ROOMBANKER-PC/',
  title: 'RBLINK DESKTOP',
  description: 'Wireless Security Management Platform manual',
  cleanUrls: true,
  locales: {
    en: { label: 'English', lang: 'en-US', themeConfig: { nav: [{ text: 'English', link: '/en/' }, { text: '中文', link: '/zh/' }, { text: 'Türkçe', link: '/tr/' }], sidebar: sidebar('/en', 'en') } },
    zh: { label: '简体中文', lang: 'zh-CN', themeConfig: { nav: [{ text: '中文', link: '/zh/' }, { text: 'English', link: '/en/' }, { text: 'Türkçe', link: '/tr/' }], sidebar: sidebar('/zh', 'zh') } },
    tr: { label: 'Türkçe', lang: 'tr-TR', themeConfig: { nav: [{ text: 'Türkçe', link: '/tr/' }, { text: 'English', link: '/en/' }, { text: '中文', link: '/zh/' }], sidebar: sidebar('/tr', 'tr') } }
  },
  themeConfig: { logo: '/images/brand/roombanker-mark.svg', socialLinks: [{ icon: 'github', link: 'https://github.com/hedajun1988/ROOMBANKER-PC' }] }
});
