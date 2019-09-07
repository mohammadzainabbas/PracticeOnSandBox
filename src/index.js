
import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './demo';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

//Setup an Apollo Client

const client = new ApolloClient({
  uri: "http://localhost:4000/request"
});

ReactDOM.render(
  <ApolloProvider client={client}>
<Demo />
</ApolloProvider>
, document.querySelector('#root'));
