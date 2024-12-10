import Image from 'next/image';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { ArrowRightIcon } from 'lucide-react';
import sofa from '../../../public/sofa.png';

/**
 * CtaForm component
 * This component is used to display the call to action form section of the website with a form to learn more and a image of one of the product.
 */

const CtaForm = () => {
  return (
    <div className="flex md:gap-6 mdCustom:gap-3 md:flex-row flex-col w-full mb-40">
      <div className="w-full max-w-[43.938rem] min-h-[300px]  rounded-t-[30px] relative md:rounded-[30px] overflow-hidden ">
        <Image src={sofa} alt="sofa" fill className="absolute object-cover" />
      </div>
      <div className="bg-[#FFF3F9] rounded-b-[20px] md:rounded-[20px] w-full p-8 md:p-10 md:py-12 flex gap-4 md:gap-0 flex-col justify-between">
        <h2 className="font-cabinet font-medium text-4xl md:text-[2.688rem]">
          S&apos;inscrire & économiser{' '}
          <span className="text-[#5CD2DD]">10% </span>
        </h2>
        <div className="space-y-6">
          <p className="text-[#BDA2B0] font-medium text-sm max-w-[753px]">
            Office ipsum you must be muted. Synergize helicopter prioritize
            anyway job due harvest most opportunity didn&apos;t. Yet busy any
            meeting shark light marginalised 4-blocker message. Productize
            corporate nail caught synergy highlights lunch. Company another
            pushback items dear or any.
          </p>
          <div className="flex items-center gap-3">
            <Input
              className="rounded-md h-[3.625rem] px-6 border text-[#A68A98] text-lg font-light border-[#F5E1EB] bg-white"
              placeholder="john@doe.com"
            />
            <Button className="text-white flex items-center gap-2 rounded-md h-[3.75rem] bg-[#5CD2DD] hover:bg-[#44B3C2]">
              <span className="uppercase">S&apos;inscrire</span>
              <ArrowRightIcon size={22} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaForm;
