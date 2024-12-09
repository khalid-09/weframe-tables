import { ArrowLeft, ArrowRight } from 'lucide-react';
import ArticleCard from '../article-card';
import Heading from '../heading';

const SimilarArticles = () => {
  return (
    <div className="md:px-8 mt-24 relative bg-[#FBF9F899] py-[1.875rem] space-y-[1.875rem] px-4">
      <Heading heading="Articles similaires" />

      <div className="md:flex hidden items-center overflow-y-clip gap-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <ArticleCard key={index} className="min-w-[20.625rem]" />
        ))}
      </div>

      <div className="md:hidden block">
        <ArticleCard />
      </div>

      <button className="absolute cursor-pointer left-0 size-[2.875rem] top-1/2 -translate-y-8 bg-[#5CD2DD] text-white flex items-center justify-center z-10">
        <ArrowLeft size={24} />
      </button>

      <button className="absolute cursor-pointer right-0 size-[2.875rem] top-1/2 -translate-y-8 bg-[#5CD2DD] text-white flex items-center justify-center z-10">
        <ArrowRight size={24} />
      </button>
    </div>
  );
};

export default SimilarArticles;
