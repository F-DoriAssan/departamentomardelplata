'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  PowerIcon,
  UserCircleIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: 'Your Profile',
    href: '/',
    icon: UserCircleIcon,
    id: 'user-menu-item-0 ',
  },
  {
    name: 'Settings',
    href: '/',
    icon: WrenchScrewdriverIcon,
    id: 'user-menu-item-1',
  },
  { name: 'Sign out', href: '/', icon: PowerIcon, id: 'user-menu-item-2' },
];

export default function NavLinksProfile() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            role="menuitem"
            className={clsx(
              'flex text-gray-300  px-4 py-2 text-sm',

              {
                'block px-4 py-2 text-sm text-gray-700': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className=" md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
