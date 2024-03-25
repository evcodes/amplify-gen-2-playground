import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {generateClient} from "aws-amplify/api";
import * as queries from "../../graphql/queries";
import {Link} from "react-router-dom";
import {Button, ButtonGroup} from "@mui/material";
import {Amplify} from "aws-amplify";
import config from "../../amplifyconfiguration.json";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

Amplify.configure(config)
export const client = generateClient();
const rows = await client.graphql({ query: queries.listCustomers });

export default function CustomerTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer id </TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Created at </TableCell>
            <TableCell align="right">Modify </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.data.listCustomers.items.map((customer) => (
            <TableRow
              key={customer.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link to = {`/customers/details/${customer.id}`}>{customer.id}</Link>
              </TableCell>
              <TableCell align="right">{customer.firstName}</TableCell>
              <TableCell align="right">{customer.lastName}</TableCell>
              <TableCell align="right">{customer.email}</TableCell>
              <TableCell align="right">{customer.createdAt}</TableCell>
              <TableCell align ="right">
                <ButtonGroup variant="contained" aria-label="Basic button group">
                  <Button color= "error">Delete</Button>
                  <Button>Edit</Button>
                  <Button color="warning">Details</Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
