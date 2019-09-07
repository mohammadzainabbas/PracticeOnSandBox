import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

//Creating books query

const getAllBooks = gql`
  {
    books {
      id
      name
      genre
    }
  }
`;


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

const BooksList = (props) => {
  const classes = useStyles();
  const { loading, books } = props.data;

  if(loading){
    return(
      <>
      <Typography component='h4' align='center' variant='h8' color='textSecondary' >Fetching from server. Please wait</Typography>
      </>
    )
  }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Genre</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book, index) => (
            <TableRow key={book.id}>
              <TableCell component="th" scope="row">
                {index}
              </TableCell>
              <TableCell align="left">{book.name}</TableCell>
              <TableCell align="left">{book.genre}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
export default graphql(getAllBooks)(BooksList);
