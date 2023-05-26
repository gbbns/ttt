import fetchData from '@/lib/fetch-data';
import Link from 'next/link';

import Header from '@/components/header';
import Footer from '@/components/footer';

import styles from './page.module.css';

export default async function Home() {
  const data = await fetchData();
  return (
    <>
      <Header />
      <main className={styles.main}>
        <ul className='data-wrapper'>
          {data &&
            data.customers.map((customer, index) => (
              <li key={index} className='data-wrapper__item'>
                <Link
                  key={index}
                  href={`/customers/${customer.id}`}
                  className='data-wrapper__link'>
                  <h3>{customer.name}</h3>
                  <p>{customer.email}</p>
                  <p>
                    {customer.country_code} {customer.city}
                  </p>
                </Link>
              </li>
            ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
