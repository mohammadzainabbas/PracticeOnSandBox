import React from "react";
import BooksList from "./BooksList";
import AuthorsList from "./AuthorsList";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//Setup an Apollo Client

const client = new ApolloClient({
  uri: "http://localhost:4000/request"
});

const useStyles = makeStyles(theme => ({
  button: {
    textTransform : 'capitalize'
  }
}));

const App = () => {
  const classes = useStyles();
  const [ isBook, setIsBook ] = React.useState(true);
  return (
    <>
      <ApolloProvider client={client}>
        <Button className={classes.button} color='primary' variant='outlined' onClick={() => setIsBook(!isBook)} >
          {isBook ? "Show Authors" : "Show Books"}
        </Button>
        {isBook ? <BooksList /> : <AuthorsList />}
      </ApolloProvider>
    </>
  );
};

export default App;
