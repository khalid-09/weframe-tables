import { ReactLenis } from '@/lib/lenis';

/**
 * SmoothScrolling component
 * This component is used to provide smooth scrolling to the website.
 */

const SmoothScrolling = ({ children }: { children: React.ReactNode }) => {
  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: false,
    smooth: true,
  };
  return (
    <ReactLenis options={lenisOptions} root>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;
