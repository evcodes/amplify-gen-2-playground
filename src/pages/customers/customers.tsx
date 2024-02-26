import * as React from 'react';
import CustomerTable from './customerTable';
import { Button } from '@mui/material';

export default class Customer extends React.Component {
  public render() {
    return (
      <div>
        <h1>Customers Home</h1>
        <Button variant="contained" size='small'>Create new Customer</Button>

        <CustomerTable/>
        
        
      </div>
    );
  }
}
