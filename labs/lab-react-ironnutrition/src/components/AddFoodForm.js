import { Button, Input } from "antd";
import { useState } from "react";
import "../App.css";

function AddFoodForm({addFunction}) {
  const [food, setFood] = useState(
    {
      name: '',
      image: '',
      calories: '',
      servings: ''
    }
  )

  function handleChange(event) {
    setFood({
      ...food,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    addFunction(food)
    setFood({
      name: '',
      image: '',
      calories: '',
      servings: ''
    })
  }
 
  return (
    <div style={{margin: '0 auto', display: 'inline-block', justifyContent: 'center'  }} className="form">

      <label>Name</label>
      <br />
      <Input
        onChange={handleChange}
        name="name"
        className="foodForm"
        value={food.name}
        type="text"
      />
      <br />

      <label>Image</label>
      <br />
      <Input
        onChange={handleChange}
        name="image"
        className="foodForm"
        value={food.image}
        type="text"
      />
      <br />

      <label>Calories</label>
      <br />
      <Input
        onChange={handleChange}
        name="calories"
        className="foodForm"
        value={food.calories}
        type="text"
      />
      <br />

      <label>Servings</label>
      <br />
      <Input
        onChange={handleChange}
        name="servings"
        className="foodForm"
        value={food.servings}
        type="text"
      />
      <br />
      <br />
      <Button onClick={handleSubmit}>Create</Button>
    </div>
  );
}

export default AddFoodForm;
