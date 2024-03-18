import * as React from "react";
import CustomerTable from "./customerTable";
import { Button } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import "./customer.css"
export default class Customer extends React.Component {
  public render() {
    return (
      <div className = "customer-container">
        <h1>Customers Home</h1>
        <Link to="new">
          <Button variant="contained" size="small">
            Create new Customer
          </Button>
        </Link>
        <div className = "customer-table-container">
          <CustomerTable />
        </div>
        <Outlet />
      </div>
    );
  }
}
