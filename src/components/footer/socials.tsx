import { Button } from '../ui/button';
import Image from 'next/image';

import twitter from '../../../public/icons/twitter.png';
import instagram from '../../../public/icons/instagram.png';
import linkedin from '../../../public/icons/linkedin.png';

const icons = [
  {
    icon: twitter,
    alt: 'twitter icon',
  },
  {
    icon: instagram,
    alt: 'instagram icon',
  },
  {
    icon: linkedin,
    alt: 'linkedin icon',
  },
];

const Socials = () => {
  return (
    <div className="space-y-3">
      <p className="font-bold text-lg text-right font-cabinet">NOUS SUIVRE</p>
      <div className="flex items-center gap-2.5 sm:gap-1.5 flex-wrap">
        {icons.map(({ icon, alt }, index) => (
          <Button
            key={index}
            size="icon"
            className="size-[2.625rem]"
            variant="outline"
          >
            <Image src={icon} alt={alt} height={22} width={22} />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Socials;
