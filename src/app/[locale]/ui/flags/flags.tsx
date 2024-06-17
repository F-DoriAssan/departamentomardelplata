import Image from 'next/image';

export  function FlagES() {
  return (
 <div className='  lg:ml-8 lg:flex'>
       <Image
      src="/flags/es.svg"
      width={30}
      height={30}
      className=" md:block"
      alt="FlagES"
    />
    <Image
    src="/flags/ar.svg"
    width={30}
    height={30}
    className=" md:block"
    alt="FlagAR"
  />
 </div>
  );
}

export function FlagPT() {
  return (
 <div className=' lg:ml-8 lg:flex'>
       <Image
      src="/flags/pt.svg"
      width={30}
      height={30}
      className=" md:block"
      alt="FlagPT"
    />
    <Image
    src="/flags/br.svg"
    width={30}
    height={30}
    className=" md:block"
    alt="FlagBR"
  />
 </div>
  );
}

export function FlagUS() {
  return (
 <div className=' lg:ml-8 lg:flex'>
       <Image
      src="/flags/us.svg"
      width={30}
      height={30}
      className=" md:block"
      alt="FlagUS"
    />
    <Image
    src="/flags/gb.svg"
    width={30}
    height={30}
    className=" md:block"
    alt="FlagGB"
  />
 </div>
  );
}
