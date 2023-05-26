export default function Header() {
  return (
    <>
      <header className='content__wrapper'>
        <h1>Customers</h1>
        <form id='SearchForm' className='content__wrapper-form'>
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
    </>
  );
}
