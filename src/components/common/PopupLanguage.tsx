'use client';

import { LocaleCode } from '@/constants';
import { useCommonTranslation } from '@/hooks';
import { Link, usePathname } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { twMerge } from 'tailwind-merge';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import ShinyButton from '../ui/shiny-button';

const options = [
  { country: 'English', code: LocaleCode.en, flag: '🇺🇸' },
  { country: 'Tiếng Việt', code: LocaleCode.vi, flag: '🇻🇳' },
];

export default function PopupLanguage() {
  const commonTrans = useCommonTranslation();
  const pathname = usePathname();

  const currentLocale = useLocale();

  return (
    <Popover>
      <PopoverTrigger>
        <ShinyButton>{commonTrans('Language')}</ShinyButton>
      </PopoverTrigger>
      <PopoverContent
        className='flex flex-col items-start gap-y-1 p-2'
        style={{
          width: '100%',
        }}
      >
        {options.map((option) => (
          <Link
            key={option.code}
            href={pathname}
            locale={option.code as LocaleCode}
          >
            <span className='mr-2'>{option.flag}</span>
            <span
              className={twMerge(
                'text-zinc-500',
                currentLocale === option.code && 'text-primary'
              )}
            >
              {option.country}
            </span>
          </Link>
        ))}
      </PopoverContent>
    </Popover>
  );
}
