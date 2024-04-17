import { Suspense } from 'react';

import { Metadata } from 'next';
import { fetchInvoicesPages } from 'src/app/[locale]/lib/data';
import { lusitana } from 'src/app/[locale]/ui/fonts';
import { CreateInvoice } from 'src/app/[locale]/ui/invoices/buttons';
import Pagination from 'src/app/[locale]/ui/invoices/pagination';
import Table from 'src/app/[locale]/ui/invoices/table';
import Search from 'src/app/[locale]/ui/search';
import { InvoicesTableSkeleton } from 'src/app/[locale]/ui/skeletons';

export const metadata: Metadata = {
  title: 'Invoices',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between bg-slate-950">
        <h1 className={`${lusitana.className} text-2xl bg-slate-950 text-amber-50`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8 bg-gray-900">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>
      <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense> 
      <div className="mt-5 flex w-full justify-center bg-slate-950 text-amber-50">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
