import Articles from '@/sections/articles';
import CTA from '@/sections/cta';
import Footer from '@/sections/footer';
import Hero from '@/sections/hero';

/**
 * Home Page or Landing Page containing the different sections of the website.
 */

const Page = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Articles />
      <div className="bg-gradient-to-b from-pink-100/20 to-white">
        <CTA />
      </div>
      <Footer />
      <div className="mt-80" />
    </main>
  );
};

export default Page;
