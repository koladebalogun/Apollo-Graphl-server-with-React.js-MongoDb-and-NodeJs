import React, {useState} from "react";
import { useQuery, useMutation } from "@apollo/client";
import { getAuthorsQuery, addBookMutation, getBooksQuery } from "../queries/queries";


function AddBook() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  const { loading, error, data } = useQuery(getAuthorsQuery);

  const [addBook, {data: sentData, error: err}] = useMutation(addBookMutation);

  console.log(sentData);

  const displayAuthors = () => {
    if (loading) return <option disabled>Loading ...</option>;
    if (error) return <option disabled>Error!</option>;

    if (data) {
      const { authors } = data;
      return authors.map((author) => (
        <option key={author.id} value={author.id}>
          {/* the value={author.id} is so when when a user selects a particular author we know the author id the book will be associated with */}
          {author.name}
        </option>
      ));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, genre, authorId);

    addBook({
        variables:{
            name: name,
            genre: genre,
            authorId: authorId
        },
        refetchQueries:[{query: getBooksQuery}]
    })
  }


  return (
    <div>
      <form id="add-book" onSubmit={handleSubmit}>
        <div className="field">
          <label>Book Name:</label>
          <input type="text" onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text" onChange={(e) => setGenre(e.target.value)}/>
        </div>
        <div className="field">
          <label>Author:</label>
          <select onChange={(e) => setAuthorId(e.target.value)}>
            <option>Select Author</option>
            {displayAuthors()}
          </select>
        </div>

        <button>+</button>
      </form>
    </div>
  );
}

export default AddBook;


//this is how we can bind several different queries and mutations together to one component
