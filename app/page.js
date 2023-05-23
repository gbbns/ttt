import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
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
          <li>
            <a href='#'>
              <h2>Customer name</h2>
              <p>Customer email</p>
              <p>Customer details</p>
            </a>
          </li>
        </ul>
      </main>
      <footer>
        <form id='Pagination'>
          <fieldset>
            <legend>Page results</legend>
            <label for='PaginationSelect'>
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
