import './App.css';
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar';

// Make sure to connect the api

// views
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import ErrorView from './views/ErrorView';
import BookView from './views/BookView';

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={ <HomeView/> } />
        <Route path="/about" element={<AboutView/> } />
        <Route path="/book/:id" element={ <BookView/> } />
        <Route path='*' element={<ErrorView/>} />

      </Routes>

      <h2>Footer</h2>
    </>
  );
}

export default App;
