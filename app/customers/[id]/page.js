import fetchCustomerData from '@/lib/fetch-customer-data';
import Link from 'next/link';
export default async function Page({ params }) {
  const data = await fetchCustomerData(params.id);
  return (
    <>
      <main className='content__wrapper customer__wrapper'>
        <Link href='/'>Back to customers</Link>
        <div className='customer__information'>
          <h3>{data.name}</h3>
          <p>{data.email}</p>
          <p>
            {data.country_code}
            {data.city}
          </p>
          <p>{data.address}</p>
        </div>
      </main>
    </>
  );
}
