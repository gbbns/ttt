export default function Header() {
  return (
    <>
      <header>
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
    </>
  );
}
