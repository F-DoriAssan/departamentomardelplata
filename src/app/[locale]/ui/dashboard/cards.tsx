import { fetchCardData } from 'src/app/[locale]/lib/data';
import { lusitana } from 'src/app/[locale]/ui/fonts';

import {
  BanknotesIcon,
  ClockIcon,
  InboxIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

     <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      /> 
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl  p-2 shadow-sm bg-gray-900 ">
      <div className="flex p-4 bg-gray-900">
        {Icon ? <Icon className="h-5 w-5 text-gray-50" /> : null}
        <h3 className="ml-2 text-sm font-medium text-amber-50">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-slate-950 text-amber-50 px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
