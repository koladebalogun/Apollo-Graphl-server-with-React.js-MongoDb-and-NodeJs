import React,{useState} from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";


function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);
  const [selected, setSelected] = useState(null)

  if (loading) return <p>Loading...</p>;

  if (data) {
    // console.log(data);
  }

  if (error) return <p>Error :</p>;
  return (
    <>
    {loading && <p>Loading...</p>}
    <div>
      {data.books.map((book) => (
      <ul key={book.id} className="book-list">
        <li onClick={() => {setSelected(book.id)}}>{book.name}</li>
      </ul>

      ))}
    </div>
    <BookDetails bookId={selected}/>
    </>
  );
}

export default BookList;
