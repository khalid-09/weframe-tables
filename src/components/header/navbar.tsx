import Image from 'next/image';
import SearchInput from './search-input';
import { Montserrat, Poppins } from 'next/font/google';
import { AlignJustify, ChevronDown, Heart, ShoppingCart } from 'lucide-react';
import { Button } from '../ui/button';
import HeaderTabs from './header-tabs';
import Link from 'next/link';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const monsterrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const Navbar = () => {
  return (
    <>
      <header
        id="navbar"
        className="md:p-8 p-4 flex items-center justify-between w-full"
      >
        <Link href="/#navbar" className="flex items-start gap-4">
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
        <div
          className={`font-medium ${poppins.className} antialiased text-sm hidden  md:flex items-center gap-3`}
        >
          <div className="flex items-center gap-2">
            <Image
              src="/icons/lightbulb.png"
              alt="Light Bulb Icon"
              height={18}
              width={18}
            />
            <span>Inspirations</span>
          </div>
          <div className="p-[0.625rem] flex items-center gap-2">
            <Heart size={20} className="text-[#8F9BA0]" />
            <span>Mes favoris</span>
            <span className="bg-[#CAD2D566] h-[1.125rem] w-7 rounded-full text-[0.625rem] flex items-center justify-center text-[#242D30]">
              24
            </span>
          </div>
          <Button className="bg-[#007AAD]  flex items-center gap-2 text-white h-12 w-[6.563rem] py-[0.625rem] px-4">
            <ShoppingCart size={20} />
            <span>Panier</span>
          </Button>
          <div className="size-11 bg-[#EAEDEE] rounded-full"></div>
          <div className="flex items-center cursor-pointer gap-2">
            <span
              className={`text-[#1F2A37] ${monsterrat.className} antialiased`}
            >
              FR
            </span>
            <ChevronDown size={16} />
          </div>
        </div>
        <Button
          className="ml-2 md:hidden flex items-center justify-center"
          size="icon"
          variant="outline"
        >
          <AlignJustify className="size-8" />
        </Button>
      </header>
      <HeaderTabs />
    </>
  );
};

export default Navbar;