import Breadcumbs from '@/components/hero/breadcumbs';
import ImageDisplay from '@/components/hero/image-display';
import ProductDescription from '@/components/hero/product-description';
import ProductDetails from '@/components/hero/product-details';

const Hero = () => {
  return (
    <section className="md:px-8 px-4">
      <Breadcumbs />
      <div id="page1" className="flex flex-col md:flex-row gap-5">
        <ImageDisplay />
        <ProductDetails />
      </div>
      <ProductDescription />
    </section>
  );
};

export default Hero;
