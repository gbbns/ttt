import SearchForm from './SearchForm';

export default function Header() {
  return (
    <>
      <header className='content__wrapper'>
        <h1>Customers</h1>
        <SearchForm />
      </header>
    </>
  );
}
