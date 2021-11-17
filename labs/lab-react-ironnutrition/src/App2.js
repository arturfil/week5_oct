import FoodBox2 from "./components/FoodBox2";
import food_data from "./foods.json";
import { Row } from "antd";
import { useState } from "react";
import AddFoodForm2 from "./components/AddFoodForm2";
import Search2 from "./components/Search2";
import { Button } from "antd";

function App2() {
  const [foods, setFoods] = useState(food_data);
  const [display, setDisplay] = useState(false);

  const toggle = () => {
    setDisplay(!display);
  }

  return (
    <div style={{ marginTop: "40px" }}>
      <h1 style={{ textAlign: "center" }}>App 2</h1>

      { display && (
        <AddFoodForm2 foodList={foods} callback={setFoods} />
      )}

      <div>
        <Button style={{display: 'flex', margin: '40px auto'}} onClick={toggle}>
          {display ? "Show Form" : "Hide Form"}
        </Button>
      </div>

      <Search2 foodList={foods} callback={setFoods} />

      <Row>
        {foods.map((food, i) => (
          <FoodBox2 
            positionIndex={i}
            key={i} 
            obj={food} 
            foodList={foods} 
            callback={setFoods} 
          />
        ))}
      </Row>
    </div>
  );
}

export default App2;
