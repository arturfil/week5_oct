import { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';

function HomeView() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    getBooks();
  }, [])

  const getBooks = async () => {
    axios.get("http://localhost:5000/api/books")
      .then(response => {
        console.log(response);
        setBooks(response.data);
      })
  }

  return (
    <div className="container mt-5">
      <h2>Home View</h2>

      <div className="container">
        <div className="row">

          {books.map((book) => (
            <div className="col mt-5">
              <BookCard obj={book} />
            </div>
          ))}

        </div>
      </div>

    </div>
  )
}

export default HomeView