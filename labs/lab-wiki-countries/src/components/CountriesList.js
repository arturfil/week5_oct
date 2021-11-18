import React from 'react';
import { Link } from 'react-router-dom';

export default function CountriesList({countries}) {


  return (
    <div>
      <ul className="sidenav">
        {countries.map((c, i) => (
          <li key={i}>
            <Link to={`/countries/${c.cca3}`}>{c.name.common}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
