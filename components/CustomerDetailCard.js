export default function CustomerDetailCard({
  name,
  email,
  country_code,
  city,
  address,
}) {
  return (
    <>
      <div className='customer__information'>
        <h3>{name}</h3>
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p>
          {country_code} {city}
        </p>
        <p>{address}</p>
      </div>
    </>
  );
}
