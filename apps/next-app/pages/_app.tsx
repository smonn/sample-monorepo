import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import React from "react";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ApolloProvider client={client}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default App;
