import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const SingleBookView = () => {
  const [singleBook, setSingleBook] = useState({});
  const {id} = useParams();

  useEffect(() => {
    getSingleBook();
  }, [])

  const getSingleBook = () => {
    axios.get(`http://localhost:5000/api/books/book/${id}`)
      .then(response => {
        setSingleBook(response.data);
      })
  }

  return (
    <div className="container mt-5">
      <h2>{singleBook.title}</h2>
      <h4>{singleBook.author}</h4>
      <p>{singleBook.genres}</p>
      <p>{singleBook.numberOfPages}</p>
    </div>
  )
}

export default SingleBookView;