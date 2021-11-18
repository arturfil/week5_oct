import { Routes, Route } from 'react-router-dom';
import CountriesList2 from './components/CountriesList2';
import CountryDetails from './components/CountryDetails';
import { CountryDetails2 } from './components/CountryDetails2';
import countries from './countries.json';

const App2 = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <CountriesList2 data={countries} />
          </div>
          <div className="col-9">
            <Routes>
              <Route path="/countries/:id" element={<CountryDetails2 data={countries} />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App2;
