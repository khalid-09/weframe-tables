import Breadcumbs from '@/components/hero/breadcumbs';
import ImageDisplay from '@/components/hero/image-display';
import ProductDescription from '@/components/hero/product-description';
import ProductDetails from '@/components/hero/product-details';

/**
 * Hero component
 * This component is used as the main or the landing layout of the website, Its fully responsive and contains all the necessary components to display the product details including product images and description.
 */

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
