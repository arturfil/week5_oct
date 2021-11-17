import { useParams } from "react-router";
import { useEffect, useState} from 'react';
import axios from "axios";

function BookView() {
  const [book, setBook ] = useState({});
  const {id} = useParams();

  useEffect(() => {
    // axios.get('/api/hero/${id}) => response
    // setHero(response.data)
    axios.get(`http://localhost:5000/api/books/book/${id}`)
      .then((response) => {
        setBook(response.data)
      })
  }, [])


  return (
    <div style={{textAlign: 'center'}}>
      <h2>Title: {book.title}</h2>
      <h2>Author: {book.author}</h2>
      <h2>Genres: {book.genres}</h2>
      <h2>Pages: {book.numberOfPages}</h2>
    </div>
  )
}

export default BookView;