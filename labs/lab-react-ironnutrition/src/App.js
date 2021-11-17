import './App.css';
import food_data from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import { Divider, Row } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [meals, setMeals] = useState(food_data);
  const [filteredData, setfilteredData] = useState(meals)

  function addMeal(newMeal) {
    setMeals([newMeal, ...meals])
  }

  function filterMeals(term) {
    let filtered = meals.filter(meal => {
      return meal.name.toLowerCase().includes(term.toLowerCase())
    });
    setfilteredData(filtered)
  }

  function deleteItem(index) {
    let filtered = meals.filter((meal, i) => {
      return i !== index;
    })
    setMeals(filtered);
  }

  return (
    <div className="App">
      <Divider>Add Food</Divider>
      <div style={{display: 'flex', justifyContext: 'center'}}>
        <AddFoodForm func={addMeal}/>
      </div>
      <Divider>Search Food</Divider>
      <Search func={setfilteredData} meals={filterMeals}/>
      <Divider>Meals List</Divider>
      <Row>
        {filteredData.map((meal, i) => (
          <div key={i}>
            <FoodBox food={meal} deleteFunc={() => deleteItem(i)}/>
          </div>
        ))}
      </Row>
    </div>
  );
}

export default App;
