import fetchData from '@/lib/fetch-data';
import Link from 'next/link';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomerLink from '@/components/CustomerLink';

export default async function Home() {
  const data = await fetchData();
  return (
    <>
      <Header />
      <main className='content__wrapper'>
        <ul className='data-wrapper'>
          {data &&
            data.customers.map((customer, index) => (
              <li key={index} className='data-wrapper__item'>
                <Link
                  key={index}
                  href={`/customers/${customer.id}`}
                  className='data-wrapper__link'>
                  <CustomerLink
                    name={customer.name}
                    email={customer.email}
                    country_code={customer.country_code}
                    city={customer.city}
                  />
                </Link>
              </li>
            ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
