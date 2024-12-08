import InterestedArticles from '@/components/similar-acticles/interested-articles';
import Hero from '@/sections/hero';

const Page = () => {
  return (
    <section className="md:px-8 px-4 ">
      <Hero />
      <InterestedArticles />
    </section>
  );
};

export default Page;
