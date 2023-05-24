import fetchData from '@/lib/fetch-data';
import Link from 'next/link';
import styles from './page.module.css';

export default async function Home() {
  const data = await fetchData();
  return (
    <>
      <header className={styles.grid}>
        <h1>Customers</h1>
        <form>
          <fieldset id='SearchForm'>
            <legend>Search for a customer</legend>
            <input
              type='search'
              placeholder='Search'
              id='CustomerSearchInput'
            />
            <button>Search</button>
          </fieldset>
        </form>
      </header>
      <main className={styles.main}>
        <ul>
          {data.customers.map((customer, index) => (
            <li key={index}>
              <Link key={index} href={`/customers/${customer.id}`}>
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
      <footer>
        <form id='Pagination'>
          <fieldset>
            <legend>Page results</legend>
            <label htmlFor='PaginationSelect'>
              Page
              <select name='Pagination' id='PaginationSelect'>
                <option value='1'>1</option>
                <option value='2'>2</option>
              </select>
              of x
            </label>
          </fieldset>
        </form>
      </footer>
    </>
  );
}
