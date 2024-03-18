import { Button, TextField } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";
import { createCustomer } from "../../graphql/mutations";
import { generateClient } from "aws-amplify/api";
import { useState } from "react";

const client = generateClient();

export default function CreateCustomer() {
  let [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    description: "",
  });
  const handleCreateCustomer = async () => {
    console.log(customer);

    await client.graphql({
      query: createCustomer,
      variables: {
        input: customer,
      },
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomer({ ...customer, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Link to="/customers">
        <p>Back to customers</p>
      </Link>
      <h1>Creating a new customer</h1>
      <div>
        <TextField
          required
          name="firstName"
          label="First name"
          variant="filled"
          onChange={handleInputChange}
          style={{ marginRight: "10px" }}
        />
        <TextField
          required
          id="lastName"
          name="lastName"
          label="Last name"
          variant="filled"
          onChange={handleInputChange}
        />
        <TextField
          required
          id="email"
          name="email"
          label="Email"
          variant="filled"
          onChange={handleInputChange}
        />
      </div>
      <br />

      <Button variant="contained" size="small" onClick={handleCreateCustomer}>
        Create new Customer
      </Button>
    </div>
  );
}
