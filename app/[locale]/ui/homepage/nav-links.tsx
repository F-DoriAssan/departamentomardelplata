'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  DocumentDuplicateIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [

  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Products', href: '/products', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center  gap-2 rounded-md bg-gray-800  text-amber-400 p-3 text-sm font-medium hover:bg-sky-100 hover:text-slate-900 hover:justify-center md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-slate-900': pathname === link.href,
              },
            )}          >
            <LinkIcon className="w-6" />
            <p className=" md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
