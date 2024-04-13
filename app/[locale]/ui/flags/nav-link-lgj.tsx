'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import FlagUS from '@/app/[locale]/ui/flags/flags';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [

  {
    name: 'EN',
    href: '/en',
    icon: FlagUS,
},
  // {
  //   name: 'AR',
  //   href: '/ar',
  //   icon: DocumentDuplicateIcon,
  // },
  // {
  //   name: 'ES',
  //   href: '/es',
  //   icon: DocumentDuplicateIcon,
  // },
  // {
  //   name: 'PT',
  //   href: '/pt',
  //   icon: DocumentDuplicateIcon,
  // },
  // {
  //   name: 'FR',
  //   href: '/fr',
  //   icon: DocumentDuplicateIcon,
  // },
  // {
  //   name: 'IT',
  //   href: '/it',
  //   icon: DocumentDuplicateIcon,
  // },
  // {
  //   name: 'NL',
  //   href: '/nl',
  //   icon: DocumentDuplicateIcon,
  // },
  
];

export default function NavLinkLgj() {
  const pathname = usePathname();

  return (

    <>

      {links.map((link) => {
        const LinkImg = link.icon;
        return (

          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex items-center text-sky-100 hover:text-amber-400',
              {
                'bg-sky-100 text-slate-900': pathname === link.href,
              },
            )}          >
            < LinkImg     />
            <p className=" md:block">{link.name}</p>
          </Link>
          );      
      })}
    </>
  );
}
