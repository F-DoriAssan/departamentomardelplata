import {
  fetchCustomers,
  fetchInvoiceById,
} from '@/app/[locale]/lib/data';
import Breadcrumbs from '@/app/[locale]/ui/invoices/breadcrumbs';
import Form from '@/app/[locale]/ui/invoices/edit-form';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [invoice, customers] = await Promise.all([
      fetchInvoiceById(id),
      fetchCustomers(),
    ]);
    return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}