import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface HeadingProps {
  heading: string;
}

/**
 * Heading component
 * This component is used to display the heading for the individual sections in the articles component and its reusable and with a link to view more.
 */

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
