'use client';

import Image from 'next/image';
import Link from 'next/link';
import SearchInput from './search-input';
import { useLenis } from 'lenis/react';

const Logo = () => {
  const lenis = useLenis();

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const element = document.getElementById('page1') as HTMLElement;
    if (element && lenis) {
      lenis.scrollTo(element, { offset: -200 });
    }
  };

  return (
    <Link
      href="#navbar"
      onClick={e => handleLinkClick(e)}
      className="flex items-start gap-4"
    >
      <Image
        src="/logo.png"
        alt="logo"
        className="md:block hidden"
        height={65}
        width={133}
      />
      <Image
        src="/logo.png"
        className="md:hidden block"
        alt="logo"
        height={45}
        width={90}
      />
      <SearchInput />
    </Link>
  );
};

export default Logo;
