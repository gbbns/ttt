'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function SearchForm() {
  const pathname = usePathname();
  const router = useRouter();
  const search = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    () => null > (search ? search.get('search') : '')
  );

  const customerSearch = (event) => {
    event.preventDefault();
    if (typeof searchQuery !== 'string') {
      return;
    }

    router.push(`/search?query=${searchQuery}`, undefined, { shallow: true });
  };
  return (
    <form
      id='SearchForm'
      className='content__wrapper-form'
      onSubmit={customerSearch}>
      <fieldset>
        <legend>Search for a customer</legend>
        <input
          type='search'
          placeholder='Search'
          id='CustomerSearchInput'
          value={searchQuery || ''}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button>Search</button>
      </fieldset>
    </form>
  );
}
