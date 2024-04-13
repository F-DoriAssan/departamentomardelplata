import Image from 'next/image';

export default function FlagUS() {
  return (
 <div className=' hidden lg:ml-8 lg:flex'>
       <Image
      src="/flags/us.svg"
      width={30}
      height={30}
      className="hidden md:block"
      alt="FlagUS"
    />
    <Image
    src="/flags/gb.svg"
    width={30}
    height={30}
    className="hidden md:block"
    alt="FlagGB"
  />
 </div>
  );
}
