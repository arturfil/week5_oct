import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

// view components
import HomeView from './views/HomeView';
import SingleBookView from './views/SingleBookView';

function App() {
  return (
    <>
      <NavBar style={{backgroundColor: 'blue'}} />
      <Routes>
        <Route path="/" element={ <HomeView/> } />
        <Route path="/book/:id" element={ <SingleBookView/> } />
      </Routes>
    </>
  );
}

export default App;
