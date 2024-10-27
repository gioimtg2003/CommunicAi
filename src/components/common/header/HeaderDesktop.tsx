'use client';

import { NavbarRoutes } from '@/constants';
import { useCommonTranslation } from '@/hooks';
import { getKey } from '@/utils';

export default function HeaderDesktop() {
  const translate = useCommonTranslation();
  return (
    <ul className='flex flex-row gap-x-28 font-medium text-gray-600'>
      {NavbarRoutes.map((route, index) => (
        <li key={getKey('nav-bar', index)}>
          <a href={route.href}>{translate(route.label)}</a>
        </li>
      ))}
    </ul>
  );
}
