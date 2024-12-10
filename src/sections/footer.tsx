import Links from '@/components/footer/links';
import Socials from '@/components/footer/socials';
import Logo from '@/components/header/logo';

/**
 * Footer component
 * This component is used to display the footer of the website with links for different purpose and social icons to contact.
 */

const Footer = () => {
  return (
    <footer className="px-4 md:px-8 w-full flex md:flex-row flex-col justify-between">
      <div className="flex flex-row items-center max-[1000px]:flex-col  max-[1000px]:items-start min-[770px]:flex-row min-[770px]:items-center justify-between gap-10 mdCustom:w-full md:max-w-[50rem] ">
        {' '}
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
