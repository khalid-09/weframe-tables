import Image from 'next/image';
import table from '../../../public/table.png';
import tableDark from '../../../public/table-dark.png';
import tableLight from '../../../public/table-light.png';

/**
 * ImageDisplay component
 * This component is used to display the images of the product in the hero section of the website.
 */

const ImageDisplay = () => {
  return (
    <div id="1st" className="bg-cardBg w-full rounded-md p-3 flex">
      <div className="space-y-2">
        <div className="rounded-sm bg-white flex items-center justify-center w-14 h-14">
          <Image
            src={tableDark}
            alt="Dark table thumbnail"
            width={44}
            height={44}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
          />
        </div>
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-sm bg-white w-fit">
            <Image
              src={tableLight}
              alt={`Light table thumbnail ${i + 1}`}
              width={55}
              height={55}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
            />
          </div>
        ))}
      </div>
      <div className="m-12">
        <Image
          className="mix-blend-multiply"
          src={table}
          alt="Main table image"
          width={552}
          height={552}
          priority
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
        />
      </div>
    </div>
  );
};

export default ImageDisplay;
