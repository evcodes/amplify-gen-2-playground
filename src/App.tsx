import "./App.css";
import { Amplify } from "aws-amplify";
import config from "./amplifyconfiguration.json";
import { generateClient } from "aws-amplify/api";
import * as queries from "./graphql/queries";
import { Customer, ListCustomersQuery } from "./API";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

Amplify.configure(config);
const client = generateClient();
const allCustomers = await client.graphql({ query: queries.listCustomers });

function App() {
  return (
    <div className="App">
      <h1> Mi Bodeguita Veracruz</h1>
      <ul>
        {allCustomers.data.listCustomers.items.map((customer: Customer) => (
          <div>
            <p>{customer.id}</p>
            <p>{customer.firstName}</p>
            <p>{customer.lastName}</p>
            <p>{customer.email}</p>
          </div>
        ))}
      </ul>
      <Link to="/customers">
        <Button variant="contained" color="success">
          View all customers
        </Button>
      </Link>
      <Link to="/customers/new">
        <Button variant="contained">Create Customer</Button>
      </Link>
      <Link to="/customers/details:id">
        <Button variant="contained" color="error">
          Delete Customer
        </Button>
      </Link>
    </div>
  );
}

export default App;
