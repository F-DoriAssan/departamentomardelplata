import Image from 'next/image';

export default function TechnologyLogin() {
  return (
    <div className="text-center sm:mx-auto sm:w-full sm:max-w-sm">
      <Image
        src="/favicon-500-o.svg"
        width={500}
        height={500}
        className="mx-auto h-10 w-auto"
        alt="Your Company"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-300">
        Sign in to your account
      </h2>
    </div>
  );
}
