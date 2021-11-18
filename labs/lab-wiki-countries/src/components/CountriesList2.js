import { Link } from "react-router-dom";

const CountriesList2 = ({data}) => {

  return (
    <div>
      {data.map(country => (
        <li>
          <Link to={`/countries/${country.cca3}`}>
            {country.name.common}
          </Link>
        </li>
      ))}
    </div>
  )
}

export default CountriesList2; 