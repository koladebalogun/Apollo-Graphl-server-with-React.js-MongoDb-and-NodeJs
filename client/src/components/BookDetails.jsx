import React from "react";
import { useQuery } from "@apollo/client";
import { getBookQuery } from "../queries/queries";

function BookDetails({ bookId }) {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id: bookId },
  });

  if (loading) return <p>Loading...</p>;

  return (
    <div className="book-details">
      {data.book && (
        <div>
          <h2>{data.book.name}</h2>
          <p>{data.book.genre}</p>
          <p>{data.book.author.name}</p>
          <br />
          <br />
          <h3>More books by this author</h3>
          <ul>
            {data.book.author.books.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default BookDetails;
