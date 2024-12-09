import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import cart from '../../../public/logos/cart.png';
import dish from '../../../public/logos/dish.png';
import basket from '../../../public/logos/basket.png';
import truck from '../../../public/logos/truck.png';

const features = [
  {
    icon: cart,
    height: 51,
    width: 56,
    title: 'Livraison & Reprise',
    description: 'Selon vos besoins',
  },
  {
    icon: dish,
    height: 54,
    width: 61,
    title: 'Nettoyage',
    description: 'Selon vos besoins',
  },
  {
    icon: basket,
    height: 53,
    width: 51,
    title: 'Commande Illimitée',
    description: 'Tout est possible',
  },
  {
    icon: truck,
    height: 54,
    width: 62,
    title: 'Transport & Enlèvement',
    description: "On s'occupe de tout.",
  },
];

const Features = () => {
  return (
    <div className="mb-40 pt-20">
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-center text-4xl font-cabinet font-medium text-[#393939]">
          On s&apos;occupe de{' '}
          <span className="text-[#5CD2DD] font-extrabold">tout</span>
        </h2>
        <p className="text-[#9C9C9C] text-sm text-center mt-2.5">
          Office ipsum you must be muted. It meeting commitment busy pain.
        </p>
      </div>
      <div className="max-w-[61.375rem] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center w-full"
            >
              <div className="w-full flex justify-center md:justify-normal md:translate-x-[40%] items-center">
                <div className="flex items-center justify-center relative z-10 bg-white">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={feature.width}
                    height={feature.height}
                    className="mix-blend-multiply"
                  />
                </div>
                {index < features.length - 1 && (
                  <Separator
                    className="hidden lg:block flex-1 mx-4"
                    decorative
                  />
                )}
              </div>
              <div className="mt-4 text-center w-full">
                <h3 className="text-xl font-medium font-cabinet text-[#393939]">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#9C9C9C]">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
