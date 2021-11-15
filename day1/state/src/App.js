import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Example from "./Example";
import Student from "./Student";

let students = [];
// let students = 
// [

//   {
//     name: "Billy",
//     backpack: "Herschel",
//     book: "Count of Montecristo",
//     course: "Math",
//     active: true,
//   },
//   {
//     name: "John",
//     backpack: "Adidas",
//     book: "Perfume",
//     course: "Geography",
//     active: false
//   },
// ]

function App() {
  let [counter, setState] = useState(0);
  const [message, setMessage] = useState("");
  const [index, setIndex] = useState(0);

  console.log(typeof(students))

  function changeIndex() {
    setIndex(index + 1);
  }

  function add() {
    setState(counter + 1);
  }

  const lightBulb = () => {
    return (
      <h2>LightBulb</h2>
    ) 
  }
  

  const subtract = () => {
    setState(counter - 1);
  };

  const printMessage = (str) => {
    setMessage(str);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>

      {lightBulb()}

      {/* // if the students array has values on it, render it else nothing */}
      {students && students.map( (student, index) => (
        <Student key={index} props={student} />
      ))}

      If the students array has values render it otherwise
      {/* {students.length !== 0  ? students.map((student, index) => (
        <Student key={index} props={student} />
      )) : (
        <h2>No students in our data</h2>
      )} */}

      <h2>My counter: {counter}</h2>
      <h2>My message is : {message}</h2>
      {/* <button onClick={add}>Add 1</button>
      <button onClick={subtract}>Subtract 1</button>
      <button onClick={changeIndex}>Change Index</button>
      <button onClick={() => printMessage("Hello <----> 🤙🏼")}> 
        Print Message
      </button>*/}
      <Example/>
    </div>
  );
}

export default App;
