import './App.css';
import countries from './countries.json';
import CountriesList from './components/CountriesList';
import { Route, Routes } from 'react-router';
import CountryDetails from './components/CountryDetails';

function App() {

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <CountriesList countries={countries} />
          </div>
          <div className="col-10">
          <div className="container mt-5">
            <Routes>
              <Route path="/countries/:id" element={ <CountryDetails countries={countries} /> } />
            </Routes>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
