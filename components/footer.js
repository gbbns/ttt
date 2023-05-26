export default function Footer() {
  return (
    <>
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
