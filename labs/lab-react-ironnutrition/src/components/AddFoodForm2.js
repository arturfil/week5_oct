import { Form, Input, Button } from "antd";
import { useState } from "react";

function AddFoodForm2({foodList, callback}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleName = (event) => setName(event.target.value);
  const handleImage = (event) => setImage(event.target.value);
  const handleCalories = (event) => setCalories(event.target.value);
  const handleServings = (event) => setServings(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    let newFood = {name, image, calories, servings};
    callback([...foodList, newFood])
    setName("")
    setImage("")
    setCalories(0)
    setServings(0)
    alert("Food Added")
  }

  return (
    <Form style={{width: "400px", margin: "40px auto"}}>
      <label>Name</label>

      <Input
        onChange={handleName}
        value={name} 
        type="text" 
        placeholder="Name"
      />
      
      <label>Image</label>
      <Input
        onChange={handleImage}
        value={image} 
        type="text" 
        placeholder="Image"
      />
      
      <label>Calories</label>
      <Input 
        onChange={handleCalories}
        value={calories} 
        type="number" 
        placeholder="Calories"
      />
      
      <label>Servings</label>
      <Input 
        onChange={handleServings}
        value={servings} 
        type="number" 
        placeholder="Servings"
      />
      
      <Button onClick={handleSubmit} style={{marginTop: "20px"}}>Add</Button>
    </Form>
  )
}

export default AddFoodForm2;