import logo from "./logo.svg";
import "./App.css";
import Beverage from "./components/Beverage";

const guinessImg =
  "https://www.thedrinksbusiness.com/content/uploads/2020/01/iStock-458736365.jpg";
const cokeImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpZB0lNoGBUv6XBNAMV7FQBWhcQCpJMVA77jru6BSZEIjPKloTB1uq31Y6whPZ1oZm8CY&usqp=CAU";

function App() {
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>Beverages</h2>
        <div className="box-container">
          <Beverage name="Coke" price="$2" color="red" url={cokeImg} />
          <Beverage name="Guiness" price="$1" color="brown" url={guinessImg} />
          <Beverage name="Sprite" price="$2" color="green" />
        </div>
      </div>
    </>
  );
}

export default App;
