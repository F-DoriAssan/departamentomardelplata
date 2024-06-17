import Image from 'next/image';
import { lusitana } from 'src/app/[locale]/ui/fonts';

export default function TechnologyLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >

    <Image
    src="favicon.ico"
    width={30}
    height={30}
    className=" md:block"
    alt="FlagAR"
  />
      <p className="text-[44px] text-sky-100 hover:text-amber-500 shado focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 ">MdP</p>

    </div>
  );
}
