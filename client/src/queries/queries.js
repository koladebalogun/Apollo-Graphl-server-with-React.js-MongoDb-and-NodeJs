import { gql } from "@apollo/client";

const getAuthorsQuery = gql`
  query {
    authors {
      name
      id
    }
  }
`;

const getBooksQuery = gql`
  query {
    books {
      name
      id
    }
  }
`;

const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!){
    addBook(name: $name, authorId: $authorId, genre: $genre){
        name
        id
    }
  }
`

const getBookQuery = gql`
  query($id: ID){
    book(id:$id){
      id
      name
      genre
      author{
        id
        name
        age
        books{
          name
          id
        }
      }
    }
  }
`

export {getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery }