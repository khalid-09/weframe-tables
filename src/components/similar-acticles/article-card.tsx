import Image from 'next/image';
import { Button } from '../ui/button';
import { Plus, Minus } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900', '800', '500', '600'],
});

const ArticleCard = () => {
  return (
    <div className="w-full md:w-1/3">
      <div className="bg-cardBg p-3 rounded-md group">
        <div className="flex items-center p-2 justify-between">
          <Image src="/heart.png" alt="heart" width={32} height={32} />
          <div className="flex items-center gap-2">
            <span className="p-1 px-2 rounded-sm bg-white text-[0.625rem] font-medium flex items-center justify-center uppercase">
              art de la table
            </span>
            <span
              className="hidden group-hover:flex transition duration-300
         p-1 px-2 rounded-sm bg-white text-[0.625rem] font-medium items-center justify-center uppercase"
            >
              lot
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/table2.png"
            alt="table image"
            width={224}
            height={224}
            className="mix-blend-multiply transform transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div
          id="quickbuy"
          className="bg-white mt-3 rounded-md h-[3.125rem] p-2 gap-2 items-center flex opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <div className="flex w-full items-center gap-1.5">
            <span className="text-xs text-black">QTÉ</span>
            <div
              id="inner"
              className="bg-[#F3F3F366] grow flex items-center justify-between h-10 rounded-sm"
            >
              <button className="px-1.5 flex items-center">
                <Minus className="size-4 text-black" />
              </button>
              <span className="py-2 px-1.5 flex items-center justify-center">
                1
              </span>
              <button className="px-1.5 flex items-center">
                <Plus className="size-4 text-black" />
              </button>
            </div>
          </div>
          <Button className="bg-[#EE4197] h-10 w-[4.625rem]">Ajouter</Button>
        </div>
      </div>
      <div className="mt-3 px-[0.625rem] space-y-2">
        <div className="flex items-center justify-between text-2xl text-[#393939]">
          <h4 className={`${playfair.className} antialiased `}>Title</h4>
          <span>
            0 <sup>€</sup>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[#9C9C9C] text-sm">
            0,35€/Pièce · <span className="text-[0.625rem]">RÉF : VABGN5</span>
          </p>
          <span className="text-[#546A7D] bg-[#F1F4F6] rounded-full py-1.5 px-2 font-medium text-[0.688rem]">
            20 pièces
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;