const fetchCustomerData = async (id) => {
  const res = await fetch(
    `https://thawing-plains-90222.herokuapp.com/customers/${id}`
  );

  // Handle errors
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export default fetchCustomerData;
