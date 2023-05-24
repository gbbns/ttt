import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';

async function getData() {
  const res = await fetch(
    'https://thawing-plains-90222.herokuapp.com/customers'
  );

  // Handle errors
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
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
