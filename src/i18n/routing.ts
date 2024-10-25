import { LocaleCode, LocaleList } from '@/constants';
import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

const defaultLocale = 'en' as LocaleCode;

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: LocaleList,

  // Used when no locale matches
  defaultLocale,
  localeDetection: true,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
