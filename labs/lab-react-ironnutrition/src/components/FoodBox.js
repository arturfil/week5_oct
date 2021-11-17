import { Button, Card, Col } from "antd";

const FoodBox = ({food: {name, image, calories, servings}, deleteFunction}) => {


  return (
    <Col>
      <Card
        title={name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={image} height={60} alt="" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories} </b> kcal
        </p>
        <Button onClick={deleteFunction} type="primary"> Delete </Button>
      </Card>
    </Col>
    
  )
}

export default FoodBox;