import { fetchCustomers } from '@/app/[locale]/lib/data';
import Breadcrumbs from '@/app/[locale]/ui/invoices/breadcrumbs';
import Form from '@/app/[locale]/ui/invoices/create-form';

export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}