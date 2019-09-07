import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

//Creating authors query

const getAllAuthors = gql`
  {
    authors {
      id
      name
      age
    }
  }
`;

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
}));

const AuthorsList = props => {
  const classes = useStyles();
  const { loading, authors } = props.data;

  if (loading) {
    return (
      <>
        <Typography
          component="h4"
          align="center"
          variant="subtitle2"
          color="textSecondary"
        >
          Fetching from server. Please wait
        </Typography>
      </>
    );
  }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {authors.map((author, index) => (
            <TableRow key={author.id}>
              <TableCell component="th" scope="row">
                {index}
              </TableCell>
              <TableCell align="left">{author.name}</TableCell>
              <TableCell align="left">{author.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
export default graphql(getAllAuthors)(AuthorsList);
