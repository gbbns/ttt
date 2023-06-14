const fetchSearchData = async (searchQuery) => {
  const res = await fetch(
    `https://thawing-plains-90222.herokuapp.com/customers/search?query=${searchQuery}`
  );

  // Handle errors
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export default fetchSearchData;
