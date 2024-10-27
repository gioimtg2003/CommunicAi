import { INavbarRoute } from '@/interfaces';
import { AppRoute } from './route.constant';

export const NavbarRoutes: INavbarRoute[] = [
  {
    label: 'Home',
    href: AppRoute.HOME,
  },
  {
    label: 'About',
    href: AppRoute.ABOUT,
  },
  {
    label: 'Contact',
    href: AppRoute.CONTACT,
  },
];
