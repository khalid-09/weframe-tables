import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface HeadingProps {
  heading: string;
}

const Heading = ({ heading }: HeadingProps) => {
  return (
    <div className="flex md:items-center items-start  justify-between w-full">
      <h2 className="font-cabinet font-medium text-4xl text-[#393939]">
        {heading}
      </h2>
      <p className="uppercase font-medium">
        <ArrowUpRight
          size={55}
          className="text-[#393939] hover:scale-105 transition hover:underline md:hidden block"
        />
        <Link href="/" className="md:block underline hidden">
          Voir toute la collection
        </Link>
      </p>
    </div>
  );
};

export default Heading;
