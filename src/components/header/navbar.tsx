import Image from 'next/image';
import { Montserrat, Poppins } from 'next/font/google';
import { ChevronDown, Heart, ShoppingCart } from 'lucide-react';
import { Button } from '../ui/button';
import HeaderTabs from './header-tabs';
import Logo from './logo';
import lightBulb from '../../../public/icons/lightbulb.png';
import MobileNav from './mobile-nav';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const monsterrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const Navbar = () => {
  return (
    <header
      id="navbar"
      className="shadow-sm fixed z-50 top-0 left-0 right-0 bg-white"
    >
      <div className="md:p-8 p-4 flex items-center justify-between w-full">
        <Logo showSearch />
        <div
          className={`font-medium ${poppins.className} antialiased text-sm hidden  md:flex items-center gap-3`}
        >
          <div className="flex items-center gap-2 lgCustom:hidden">
            <Image
              src={lightBulb}
              alt="Light Bulb Icon"
              height={18}
              width={18}
            />
            <span>Inspirations</span>
          </div>
          <div className="p-[0.625rem] flex items-center gap-2 xlCustom:hidden">
            <Heart size={20} className="text-[#8F9BA0]" />
            <span>Mes favoris</span>
            <span className="bg-[#CAD2D566] h-[1.125rem] w-7 rounded-full text-[0.625rem] flex items-center justify-center text-[#242D30]">
              24
            </span>
          </div>
          <Button className="bg-[#007AAD]  flex items-center gap-2 text-white h-12 w-[6.563rem] py-[0.625rem] px-4 buttonCustom:hidden">
            <ShoppingCart size={20} />
            <span>Panier</span>
          </Button>

          <div className="size-11 bg-[#EAEDEE] rounded-full mdCustom:hidden" />
          <div className="flex items-center cursor-pointer gap-2 mdCustom:hidden">
            <span
              className={`text-[#1F2A37] ${monsterrat.className} antialiased`}
            >
              FR
            </span>
            <ChevronDown size={16} />
          </div>
        </div>
        <MobileNav />
      </div>
      <HeaderTabs />
    </header>
  );
};

export default Navbar;
