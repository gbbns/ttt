export default function CustomerLink({ name, email, country_code, city }) {
  return (
    <>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>
        {country_code} {city}
      </p>
    </>
  );
}
