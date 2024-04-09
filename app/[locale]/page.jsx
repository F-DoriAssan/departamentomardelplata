import '@fortawesome/fontawesome-svg-core/styles.css';

import Image from 'next/image';
import Link from 'next/link';

import { lusitana } from '@/app/[locale]/ui/fonts';
import styles from '@/app/[locale]/ui/home.module.css';
import TechnologyLogo from '@/app/[locale]/ui/technology-logo';
import { config } from '@fortawesome/fontawesome-svg-core';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

import initTranslations from '../i18n';

config.autoAddCss = false

export default async function Page({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, ['home']);

  return (
    <main className="flex min-h-screen flex-col p-6 bg-slate-950">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-gray-900 p-4 md:h-52">
        <TechnologyLogo />
      </div>

      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-900 px-6 py-10 md:w-2/5 md:px-20">
        <Image
        src="/favicon-500-o.png"
        width={500}
        height={500}
        className="mx-auto h-10 w-auto"
        alt="Your Company"
      />
          <p
            className={`${lusitana.className} text-xl text-gray-300 md:text-3xl md:leading-normal`}
          >
            <strong>{t('tits')}</strong> This is experience{' '}
            <a href="https://nextjs.org/learn/" className="text-amber-600">
              Next.js websites
            </a>
            , brought to you by Vercel & ©DoriAss.
          </p>
          <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
          <div className={styles.shape} />
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-amber-600 px-6 py-3 text-sm font-medium text-gray-300 hover:text-white transition-colors hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:text-base focus-visible:outline-orange-600"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
      
    </main>
  );
}
