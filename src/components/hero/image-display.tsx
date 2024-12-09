import Image from 'next/image';

const ImageDisplay = () => {
  return (
    <div id="1st" className="bg-cardBg w-full rounded-md p-3 flex">
      <div className="space-y-2">
        <div className="rounded-sm bg-white flex items-center justify-center w-14 h-14">
          <Image src="/table-dark.png" alt="Table img" width={44} height={44} />
        </div>
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-sm bg-white w-fit">
            <Image
              src="/table-light.png"
              alt="Table img"
              width={55}
              height={55}
            />
          </div>
        ))}
      </div>
      <div className="m-12">
        <Image
          className="mix-blend-multiply"
          src="/table.png"
          alt="Table img"
          width={552}
          height={552}
          placeholder="blur"
          blurDataURL="/blur-table.webp"
        />
      </div>
    </div>
  );
};

export default ImageDisplay;
