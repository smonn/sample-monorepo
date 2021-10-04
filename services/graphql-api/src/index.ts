import { ApolloServer, gql } from "apollo-server";

type Book = {
  title: string;
  author: Author;
};

type Author = {
  name: string;
  books: Book[];
};

const typeDefs = gql`
  type Query {
    authors: [Author]
    author(name: String): Author
  }
  type Book {
    title: String
    author: Author
  }
  type Author {
    name: String
    books: [Book]
  }
`;

const authors = [
  { name: "Ann Leckie" },
  { name: "N K Jemisin" },
  { name: "Melissa Caruso" },
];

const books = [
  { title: "Ancillary Justice", author: "Ann Leckie" },
  { title: "The Raven Tower", author: "Ann Leckie" },
  { author: "Melissa Caruso", title: "The Tethered Mage" },
  { author: "N K Jemisin", title: "The Fifth Season" },
  { author: "N K Jemisin", title: "The City We Became" },
];

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      authors() {
        return authors;
      },
      author(_, { name }: Author) {
        return authors.find((author) => author.name === name);
      },
    },
    Author: {
      books(author: Author) {
        return books.filter((book) => book.author === author.name);
      },
    },
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
