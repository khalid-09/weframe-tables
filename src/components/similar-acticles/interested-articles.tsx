import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import ArticleCard from './article-card';

const InterestedArticles = () => {
  return (
    <section className="mt-8 space-y-4 mb-20 md:px-8 px-4">
      <div className="flex md:items-center items-start  justify-between w-full">
        <h3 className="font-cabinet font-medium text-4xl text-[#393939]">
          Ces produits pourraient vous intéresser
        </h3>
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
      <div className="flex items-center  gap-3 md:flex-row flex-col">
        {Array.from({ length: 3 }).map((_, index) => (
          <ArticleCard key={index} />
        ))}
      </div>
    </section>
  );
};

export default InterestedArticles;
