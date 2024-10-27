import Link from 'next/link';
import Logo from '../Logo';
import NavbarMobile from '../navbar/NavbarMobile';
import PopupLanguage from '../PopupLanguage';
import HeaderDesktop from './HeaderDesktop';

export default function Header() {
  return (
    <header className='fixed top-0 z-50 flex w-full flex-row items-center justify-between border-0 border-b border-white border-opacity-30 bg-white bg-opacity-30 px-1 py-2 backdrop-blur-lg backdrop-filter'>
      <Link href='/' className='cursor-pointer'>
        <Logo />
      </Link>
      {/* Navigation Mobile */}
      <nav className='flex lg:hidden'>
        <NavbarMobile />
      </nav>
      {/* Navigation Desktop */}
      <nav className='hidden lg:flex'>
        <HeaderDesktop />
      </nav>
      <PopupLanguage />
    </header>
  );
}
