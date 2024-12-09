import Links from '@/components/footer/links';
import Socials from '@/components/footer/socials';
import Logo from '@/components/header/logo';

const Footer = () => {
  return (
    <footer className="px-4 md:px-8 w-full flex md:flex-row flex-col justify-between">
      <div className="flex flex-row justify-between items-center gap-10 max-w-[800px]">
        <Logo />
        <div className="md:block hidden">
          <Links />
        </div>
        <div className="md:hidden block">
          <Socials />
        </div>
      </div>
      <div className="block md:hidden">
        <Links />
      </div>
      <div className="md:block hidden">
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
