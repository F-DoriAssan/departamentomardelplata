'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FlagAR,
  FlagES,
  FlagFR,
  FlagIT,
  FlagNL,
  FlagPT,
  FlagUS,
} from 'src/app/[locale]/ui/flags/flags';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [


{
  name: 'Árabe',
  href: '/ar',
  icon: FlagAR,
},
{
  name: 'Español',
  href: '/es',
  icon: FlagES,
},
{
  name: 'Francés',
  href: '/fr',
  icon: FlagFR,
},
{
  name: 'Italíano',
  href: '/it',
  icon: FlagIT,
},
{
  name: 'Neerlandés.',
  href: '/nl',
  icon: FlagNL,
},
{
  name: 'Portugués',
  href: '/pt',
  icon: FlagPT,
},
{
  name: 'English',
  href: '/en',
  icon: FlagUS,
},
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
   
      

            );       })}

    </>
  );
}
