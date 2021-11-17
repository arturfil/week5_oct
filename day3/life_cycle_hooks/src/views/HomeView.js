import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const HomeView = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/books')
      .then((response) => {
        setBooks(response.data);
      })
  }, []);
  
  return (
    <div style={{textAlign: 'center'}}>
    
      <h2>Home Component</h2>
      {books.map((book, i) => (
        
        <div key={i}>
          <h2>{book.title}</h2>
          <Link to={`/book/${book._id}`}>View Book</Link>
        </div>
      ))}
    
    </div>
  )
}

export default HomeView;