import { useState } from 'react';
import data from './contacts.json'

const initContacts = data.splice(0,5);

function App2() {
  const [contacts, setContacts] = useState(initContacts);
  const [outRemaining, setOutRemaining] = useState(data);

  function addRandom() {
    if (outRemaining && outRemaining.length > 0) {
      let index = Math.floor(Math.random() * (outRemaining.length - 0) + 0);
      setContacts([...contacts, outRemaining[index]]);
      let filtered = outRemaining.filter((contact, i) => {
        return i != index;
      })
      setOutRemaining(filtered)
    }
  }

  function byPopularity() {
    let sorted = contacts.sort((a,b) => b.popularity - a.popularity);
    setContacts([...contacts]); // forced to use spread operator in order to avoid mutation
  }

  function byName() {
    let sorted = contacts.sort((a,b) => a.name.localeCompare(b.name));
    setContacts([...sorted]);
  }

  function deleteContact(id) {
    let filtered = contacts.filter(contact => {
      return contact.id != id;
    });
    setContacts(filtered);
  }

  return (
    <div className="App">

      <h2>First iteration</h2>
      
      <button onClick={addRandom}>Add Random Contact</button>
      <button onClick={byPopularity}>Sort By Popularity</button>
      <button onClick={byName}>Sort By Name</button>


      <table>
        <thead>
          <tr>
            <td><h3>Picture</h3></td>
            <td><h3>Name</h3></td>
            <td><h3>Popularity</h3></td>
            <td><h3>Won Oscar</h3></td>
            <td><h3>Won Emmy</h3></td>
            <td><h3>Delete</h3></td>
          </tr>
        </thead>
        <tbody>
          {contacts && contacts.map(contact => (
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl} alt="" /></td>
              <td><h3>{contact.name}</h3></td>
              <td><h3>{contact.popularity.toFixed(2)}</h3></td>
              <td>{contact.wonOscar ? '🏆' : '❌'}</td>
              <td>{contact.wonEmmy ? '🏆' : '❌'}</td>
              <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>

      </table>


    </div>
  )
}

export default App2;