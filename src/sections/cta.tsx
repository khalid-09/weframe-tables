import CtaForm from '@/components/cta/cta-form';
import Features from '@/components/cta/features';

/**
 * CTA component
 * This component is used to display the call to action section of the website, It contains the features and the form to get in touch with the user.
 */

const CTA = () => {
  return (
    <section className="bg-gradient-to-b md:px-8 px-4">
      <Features />
      <CtaForm />
    </section>
  );
};

export default CTA;
