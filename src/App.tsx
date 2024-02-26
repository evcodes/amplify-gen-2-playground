import "./App.css";
import { Amplify } from "aws-amplify";
import config from "./amplifyconfiguration.json";
import { generateClient } from "aws-amplify/api";
import {
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from "./graphql/mutations";
import { listCustomers } from "./graphql/queries";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
import { Customer } from "./API";
import { Button } from "@mui/material";

Amplify.configure(config);
const client = generateClient();
const customers = await client.graphql({ query: listCustomers });

function App() {
  const customer = {
    firstName: "Layla",
    lastName: "Castro",
    description: "Hello world!",
  };

  const handleCreateCustomer = async () => {
    await client.graphql({
      query: createCustomer,
      variables: {
        input: customer,
      },
    });
  };

  const handleDeleteCustomer = async () => {
    // await client.graphql({
    //   query: deleteCustomer,
    //   variables: {
    //     input: i,
    //   },
    // });

    console.log("todo delete customer");
  };
  const handleUpdateCustomer = async () => {
    // await client.graphql({
    //   query: updateCustomer,
    //   variables: {
    //     input: customer,
    //   },
    // });

    console.log("todo update customer");
  };
  return (
    <div className="App">
      <h1> Mi Bodeguita Veracruz</h1>
      <ul>
        {customers.data.listCustomers.items.map((customer: Customer) => (
          <div>
            <p>{customer.id}</p>
            <p>{customer.firstName}</p>
            <p>{customer.lastName}</p>
          </div>
        ))}
      </ul>
      <Button onClick={handleCreateCustomer} variant="contained">
        Create Customer
      </Button>

      <button onClick={handleDeleteCustomer}>Delete Customer</button>
      <button onClick={handleUpdateCustomer}>Create default customer</button>
    </div>
  );
}

export default App;
