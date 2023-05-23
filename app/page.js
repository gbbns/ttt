import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <header className={styles.grid}>
        <h1>Customers</h1>
        <form>
          <fieldset>
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
          <li>
            <a href='#'>
              <h2>Customer name</h2>
              <p>Customer email</p>
              <p>Customer details</p>
            </a>
          </li>
        </ul>
      </main>
    </>
  );
}
