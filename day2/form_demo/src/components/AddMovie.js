import { useState } from "react";
// imports go here

function AddMovie({props, callback}) {
  // constants (i.e state const's)
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("")
  const [rating, setRating] = useState(0);
  const [hasOscar, setHasOscar] = useState(true);


  // functions
  const handleSubmit = (event) => {
    event.preventDefault();
    let newMovie = {title, director, rating, hasOscar}
    callback([...props, newMovie])
  }

  const onChangeTitle = (event) => setTitle(event.target.value);
  const onChangeDirector = (event) => setDirector(event.target.value);
  const onChangeRating = (event) => setRating(event.target.value);
  const onChangeOscar = () => setHasOscar(!hasOscar);

  // return your html-esque -> jsx -> javascript xml

  // title, director, rating, oscars

  // add
  return (
    <form>
      <label>Title</label>
      <br />
      <input 
        value={title}  
        onChange={onChangeTitle} 
        type="text" 
        placeholder="title" 
      />
      <br />

      <label>Director</label>
      <br />
      <input 
        value={director} 
        onChange={onChangeDirector} 
        type="text" 
        placeholder="director" 
      />
      <br />

      <label>Rating</label>
      <br />
      <input 
        value={rating} 
        onChange={onChangeRating} 
        type="numbers" 
        placeholder="rating" 
      />
      <br />
      
      <label>Has won oscars</label>
      <br />

      {/* <select value={hasOscar} onChange={(event) => setHasOscar(event.target.value)} >
        <option value={false} >No</option>
        <option value={true}  >yes</option>
      </select> */}

      <input
        type="checkbox" 
        checked={hasOscar} 
        onChange={onChangeOscar} 
      />

      <br />
      <h2>{hasOscar ? 'Yes has oscar' : 'no has no oscar'}</h2>
      <br />
 
      <button onClick={handleSubmit}>Add Movie</button>
    </form>
  );
}

export default AddMovie;
