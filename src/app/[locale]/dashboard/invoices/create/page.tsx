import { Metadata } from 'next';
import { fetchCustomers } from 'src/app/[locale]/lib/data';
import Breadcrumbs from 'src/app/[locale]/ui/invoices/breadcrumbs';
import Form from 'src/app/[locale]/ui/invoices/create-form';

export const metadata: Metadata = {
  title: 'Create Invoices',
};

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