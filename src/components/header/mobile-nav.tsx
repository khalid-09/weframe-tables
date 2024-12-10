import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { AlignJustify, ChevronDown, Heart, ShoppingCart } from 'lucide-react';
import { monsterrat } from './navbar';
import lightBulb from '../../../public/icons/lightbulb.png';
import Image from 'next/image';

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="ml-1 h-[3.125rem] w-12 md:hidden mdCustom:flex items-center justify-center"
          size="icon"
          variant="outline"
        >
          <AlignJustify />
        </Button>
      </SheetTrigger>
      <SheetContent className="font-rub w-[65%] flex flex-col">
        <SheetHeader>
          <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
          <SheetDescription>
            <div className="flex items-center gap-3">
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
          </SheetDescription>
        </SheetHeader>
        <div className="mt-8 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={lightBulb}
                alt="Light Bulb Icon"
                height={18}
                width={18}
              />
              <span>Inspirations</span>
            </div>
            <div className=" flex items-center gap-2 ">
              <Heart size={20} className="text-[#8F9BA0]" />
              <span>Mes favoris</span>
              <span className="bg-[#CAD2D566] h-[1.125rem] w-7 rounded-full text-[0.625rem] flex items-center justify-center text-[#242D30]">
                24
              </span>
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button className="bg-[#007AAD] flex items-center gap-2 text-white h-12 w-full py-[0.625rem] px-4">
                <ShoppingCart size={20} />
                <span>Panier</span>
              </Button>
            </SheetClose>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
