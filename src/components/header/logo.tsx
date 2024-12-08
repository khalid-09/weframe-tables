'use client';

import Image from 'next/image';
import SearchInput from './search-input';
import { useLenis } from 'lenis/react';

const Logo = () => {
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
        src="/logo.png"
        alt="logo"
        className="md:block hidden cursor-pointer"
        height={65}
        width={133}
        onClick={handleLinkClick}
      />
      <Image
        src="/logo.png"
        className="md:hidden cursor-pointer block"
        alt="logo"
        height={45}
        width={90}
        onClick={handleLinkClick}
      />
      <SearchInput />
    </div>
  );
};

export default Logo;
