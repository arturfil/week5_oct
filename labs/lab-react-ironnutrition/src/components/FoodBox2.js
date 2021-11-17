import { Card, Col, Divider, Button } from "antd";

function FoodBox2({obj, foodList, callback, positionIndex}) {

  function deleteFood() {
    let filteredFoods = foodList.filter((food, i) => {
      return i != positionIndex;
    })
    callback(filteredFoods);
  }

  return (
    <Col>
      <Card
        title={obj.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={obj.image} height={60} />
        <p>Calories: {obj.calories}</p>
        <p>Servings: {obj.servings}</p>
        <p>
          <b>Total Calories: {obj.calories * obj.servings} </b> kcal
        </p>
        <Button onClick={deleteFood} type="primary"> Delete </Button>
      </Card>
    </Col>
  )
}

export default FoodBox2;