'use client';

import Image from 'next/image';
import SearchInput from './search-input';
import { useLenis } from 'lenis/react';
import logo from '../../../public/logo.png';

interface LogoProps {
  showSearch?: boolean;
}

const Logo = ({ showSearch = false }: LogoProps) => {
  const lenis = useLenis();

  const handleLinkClick = () => {
    const element = document.getElementById('page1') as HTMLElement;
    if (element && lenis) {
      lenis.scrollTo(element, { offset: -200 });
    }
  };

  return (
    <div className="flex items-start gap-4">
      <Image
        src={logo}
        alt="logo"
        className="md:block hidden cursor-pointer"
        height={65}
        width={133}
        onClick={handleLinkClick}
      />
      <Image
        src={logo}
        className="md:hidden cursor-pointer block"
        alt="logo"
        height={45}
        width={90}
        onClick={handleLinkClick}
      />
      {showSearch && <SearchInput />}
    </div>
  );
};

export default Logo;
