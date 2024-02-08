"use client"
import { generateClient } from "aws-amplify/data";
import { type Schema } from "../amplify/data/resource";
import React from "react";
import "./App.css";

const client = generateClient<Schema>()

function App() {

  const { data: customers } = client.models.Customer.list()


  return (
    <div className="App">
      <h1> Mi Bodeguita Veracruz</h1>
      <ul>{customers.map(customer => <li key={customer.id}>{customer.firstName}</li>)}</ul>      
    </div>
  );
}

export default App;
