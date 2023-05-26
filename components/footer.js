export default function Footer() {
  return (
    <>
      <footer className='content__wrapper'>
        <form id='Pagination' className='content__wrapper-form'>
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
