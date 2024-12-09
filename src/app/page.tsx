import InterestedArticles from '@/components/similar-acticles/interested-articles';
import CTA from '@/sections/cta';
import Footer from '@/sections/footer';
import Hero from '@/sections/hero';

const Page = () => {
  return (
    <main>
      <div className="md:px-8 px-4">
        <Hero />
        <InterestedArticles />
      </div>
      <div className="bg-gradient-to-b from-pink-100/20 to-white">
        <CTA />
      </div>
      <Footer />
      <div className="mt-80" />
    </main>
  );
};

export default Page;
