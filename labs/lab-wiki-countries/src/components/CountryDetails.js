import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function CountryDetails({countries}) {
  // const [country, setCountry] = useState({})



  const { id } = useParams();

  console.log(countries)

  let country = getCountry(id);

  function getCountry(id) {
    let single = countries.find( country => country.cca3 === id);
    return single;
  }

  return (
    <div>
    <h2>{id}</h2>
      <h1>{country.name.common}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{width: "30%"}}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((b, i) => (
                  <li>
                    <Link to={`/countries/${b}`}>{b}</Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
