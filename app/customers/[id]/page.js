import CustomerDetailCard from '@/components/CustomerDetailCard';
import fetchCustomerData from '@/lib/fetch-customer-data';
import Link from 'next/link';

export default async function Page({ params }) {
  const data = await fetchCustomerData(params.id);
  return (
    <>
      <main className='content__wrapper customer__wrapper'>
        <Link href='/'>Back to customers</Link>
        <CustomerDetailCard
          name={data.name}
          email={data.email}
          country_code={data.country_code}
          city={data.city}
          address={data.address}
        />
      </main>
    </>
  );
}
