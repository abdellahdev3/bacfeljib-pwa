import type { Config } from './types';

export default {
  id: 'com.bac.feljib.dz.education',
  name: 'Bac Feljib',
  shortName: 'Bac Feljib',
  description: 'منصة تعليمية جزائرية لطلاب البكالوريا: دروس، ملخصات، تمارين وحساب المعدل.',
  direction: 'rtl',
  language: 'ar-DZ',
  backgroundColor: '#f8fafc',
  themeColor: '#2447c7',
  display: 'standalone',
  orientation: 'natural',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',

  // ✅ فعّل التفضيل للتطبيق الأصلي
 preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'الدروس',
      shortName: 'دروس',
      description: 'دروس وملخصات البكالوريا',
      url: '/search/label/الدروس?utm_source=homescreen',
    },
    {
      name: 'التمارين',
      shortName: 'تمارين',
      description: 'تمارين محلولة للبكالوريا',
      url: '/search/label/تمارين?utm_source=homescreen',
    },
  ],

  pwa: {
    logs: true,
    oneSignalEnabled: false,
    oneSignalConfig: {
      appId: 'd9dd4395-8656-4f28-a0ef-e38f554b1c42',
      allowLocalhostAsSecureOrigin: true,
    },
  },

  origin: 'https://www.bac-feljib.com',
} satisfies Config;
