import logo from "./logo.svg";
import "./App.css";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div style={{textAlign: 'center'}}>
      <h2>Form - Controlled Components</h2>
      <MovieList />
    </div>
  );
}

export default App;
