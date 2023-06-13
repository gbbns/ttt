export default function SearchForm() {
  return (
    <form id='SearchForm' className='content__wrapper-form'>
      <fieldset>
        <legend>Search for a customer</legend>
        <input type='search' placeholder='Search' id='CustomerSearchInput' />
        <button>Search</button>
      </fieldset>
    </form>
  );
}
