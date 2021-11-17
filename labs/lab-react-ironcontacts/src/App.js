import { useState } from "react";
import "./App.css";
import ExampleCard from './ExampleCard';

import contacts from "./contacts.json";

const firstFive = contacts.splice(0, 5);

function App() {
  const [added, setAdded] = useState(firstFive);

  // console.log(firstFive);
  console.log(contacts);

  // iteration 3
  function addRandomContact() {
    if (contacts.length == 0) return;
    const randomIndex =  Math.floor(Math.random() * contacts.length); 
    const randomContact = contacts.splice(randomIndex, 1);
    setAdded([...added, randomContact[0] ])
  }

  function sortByPopularity() {
    const sorted = added.sort((a,b) => b.popularity - a.popularity);
    setAdded([...sorted]);
  } 

  function sortByName() {
    const sorted = added.sort((a,b) => a.name.localeCompare(b.name)); // localCompare
    setAdded([...sorted]);
  }

  function removeContact(index) {
    const filtered = added.filter((contact, i) => {
      return i !== index;
    })
    setAdded([...filtered]);
    console.log("removed")
  }

  return (
    <div style={{textAlign: 'center', margin: '40px' }}>
      <h2 >Iron Contacts</h2>
      <button onClick={ addRandomContact } style={{margin: '40px'}}>Add Random Contact</button>
      <button onClick={ sortByPopularity } style={{margin: '40px'}}>Sort By Popularity</button>
      <button onClick={sortByName} style={{margin: '40px'}} >Sort By Name</button>
      <table>

        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
         
          {added.map((contact, i) => (
            <ExampleCard callback={() => removeContact(i)} actor={contact} key={i} />
          ))}

        </tbody>

      </table>
    </div>
  );
}

export default App;
