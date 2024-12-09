import Image from 'next/image';
import table from '../../../public/table.png';
import tableDark from '../../../public/table-dark.png';
import tableLight from '../../../public/table-light.png';

const ImageDisplay = () => {
  return (
    <div id="1st" className="bg-cardBg w-full rounded-md p-3 flex">
      <div className="space-y-2">
        <div className="rounded-sm bg-white flex items-center justify-center w-14 h-14">
          <Image src={tableDark} alt="Table img" width={44} height={44} />
        </div>
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-sm bg-white w-fit">
            <Image src={tableLight} alt="Table img" width={55} height={55} />
          </div>
        ))}
      </div>
      <div className="m-12">
        <Image
          className="mix-blend-multiply"
          src={table}
          alt="Table img"
          width={552}
          height={552}
        />
      </div>
    </div>
  );
};

export default ImageDisplay;
