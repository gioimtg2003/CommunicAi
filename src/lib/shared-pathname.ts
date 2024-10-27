import { LocaleCode } from '@/constants';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

const localePrefix = 'always';

export const { Link, usePathname, redirect } = createSharedPathnamesNavigation({
  locales: Object.values(LocaleCode),
  localePrefix,
});
