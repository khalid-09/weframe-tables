import { Inter } from 'next/font/google';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const HeaderTabs = () => {
  return (
    <nav
      className={`md:px-8 px-4 font-medium border-b text-sm ${inter.className} antialiased`}
    >
      <ScrollArea className="w-full whitespace-nowrap">
        <ul className="flex cursor-pointer gap-9 items-center text-gray-500 uppercase justify-between upp">
          <li className="font-bold pb-3 border-b-2 text-[#0093D0] border-[#0093D0]">
            Art de la table
          </li>
          <li className="pb-3 ">Mobilier</li>
          <li className="pb-3 ">Nappage</li>
          <li className="pb-3 ">Matériel de salle</li>
          <li className="pb-3 ">Cuisine</li>
          <li className="pb-3 ">Barbecue</li>
          <li className="pb-3 ">Tente</li>
          <li className="pb-3 ">Chauffage</li>
          <li className="pb-3 ">Podium - Piste de danse</li>
          <li className="pb-3 ">Son et lumière</li>
          <li className="pb-3 ">Packs</li>
          <li className="pb-3 ">Consommables</li>
        </ul>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </nav>
  );
};

export default HeaderTabs;
