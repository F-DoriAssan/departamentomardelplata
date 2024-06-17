import { signOut } from 'auth';
import Link from 'next/link';
import NavLinks from 'src/app/[locale]/ui/dashboard/nav-links';
import TechnologyLogo from 'src/app/[locale]/ui/technology-logo';

import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-gray-900 ">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-gray-900 p-4 md:h-40 hover:bg-slate-950"
        href="/"
      >
        <div className="w-32 md:w-40">
          <TechnologyLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-900 md:block "></div>
        <form  action={async () => {
            'use server';
            await signOut();
          }}>
          <button className="peer flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-red-900 text-slater-950 p-3 text-sm font-medium hover:bg-red-600 hover:text-gray-900 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6 text-slater-950" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
