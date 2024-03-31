import {
  fetchCardData,
  fetchLatestInvoices,
  fetchRevenue,
} from '@/app/[locale]/lib/data';
import { Card } from '@/app/[locale]/ui/dashboard/cards';
import LatestInvoices from '@/app/[locale]/ui/dashboard/latest-invoices';
import RevenueChart from '@/app/[locale]/ui/dashboard/revenue-chart';
import NavLinks from '@/app/[locale]/ui/dashboard/sidenav';

export default async function Page() {
    const revenue = await fetchRevenue();
    const latestInvoices = await fetchLatestInvoices();
    const {
        numberOfInvoices,
        numberOfCustomers,
        totalPaidInvoices,
        totalPendingInvoices,
      } = await fetchCardData();


  return (

    <main>
      
      <NavLinks/>
      
    
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      
         <Card title="Collected" value={totalPaidInvoices} type="collected" /> 
         <Card title="Pending" value={totalPendingInvoices} type="pending" /> 
         <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> 
         <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue}  /> 
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
    
  );
}