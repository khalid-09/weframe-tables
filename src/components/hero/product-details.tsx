import Image from 'next/image';
import { Button } from '../ui/button';
import { Minus, Plus } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';
import heart from '../../../public/heart.png';
import ruler from '../../../public/ruler.png';
import planet from '../../../public/planet.png';

const playFairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

const ProductDetails = () => {
  return (
    <div id="2nd" className="w-full flex flex-col gap-3 justify-between">
      <div className="space-y-4">
        <div className="flex md:items-center items-start gap-10 justify-between">
          <h2
            className={`${playFairDisplay.className} antialiased font-normal text-3xl`}
          >
            Cheese – appareil à raclette 1/2 roue
          </h2>
          <Image
            src={heart}
            alt="Heart Icon"
            className="cursor-pointer mt-2 md:mt-0"
            width={27.64}
            height={25.34}
          />
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <p className="text-2xl">39,50€</p>
            <span className="text-[#9C9C9C] text-sm">/pièce</span>
          </div>
          <div className="border-y flex items-center gap-4 py-5">
            <div className="flex items-center gap-2.5">
              <Image src={ruler} alt="Ruler Icon" width={24} height={24} />
              <p>
                20
                <sup>cm</sup>
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <Image src={planet} alt="Planet Icon" width={24} height={24} />
              <p>
                50
                <sup>cm</sup>
              </p>
            </div>
            <p className="text-xs ml-auto text-[#9C9C9C]">
              RÉF : <span className="font-medium">VABGN5</span>
            </p>
          </div>
          <p className="pt-1 text-sm text-[#5D5D5D]">
            Location appareil à raclette - Raclette traditionnelle 1/2 roue
            <br />
            Réglable en hauteur
            <br />
            Appareil à raclette professionnel <br />
            Boîtier de chauffe horizontal réglable en hauteur
          </p>
          <p className="pt-1 text-sm flex text-[#5D5D5D] flex-col">
            <span>220V</span>
            <span>990W</span>
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="inline-flex w-[9.563rem] border -space-x-px rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse">
          <Button
            className="rounded-none shadow-none first:rounded-s-lg w-full last:rounded-e-lg h-full focus-visible:z-10"
            variant="ghost"
            size="icon"
            aria-label="Upvote"
          >
            <Minus size={16} strokeWidth={2} aria-hidden="true" />
          </Button>
          <span className="flex items-center  px-3 text-sm font-medium">1</span>
          <Button
            className="rounded-none shadow-none first:rounded-s-lg w-full h-full last:rounded-e-lg focus-visible:z-10"
            variant="ghost"
            size="icon"
            aria-label="Downvote"
          >
            <Plus size={16} strokeWidth={2} aria-hidden="true" />
          </Button>
        </div>
        <Button className="bg-[#5CD2DD] flex-grow h-[3.125rem] py-[0.875rem] font-semibold uppercase">
          Ajouter au panier
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
