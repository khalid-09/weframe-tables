import { Search } from 'lucide-react';
import { Input } from '../ui/input';

/**
 * Search input component
 * This component is used to search for products and has a search icon.
 */

const SeachInput = () => {
  return (
    <div className="relative ">
      <Input
        id="input-10"
        className="peer shadow-none border-none w-full mdCustom:w-[30rem] md:w-[48rem] bg-[#F9FAFB] rounded-[6px] text-sm md:p-4 font-normal h-[3.125rem] pe-9"
        placeholder="Rechercherun produit"
      />
      <div className="pointer-events-none  absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
        <Search
          size={18}
          strokeWidth={2}
          className="text-[#003349]"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default SeachInput;
