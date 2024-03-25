import {Link, useRouteError} from "react-router-dom";
import '../App.css'
import {Button} from "@mui/material";
export default function Home() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div className="App">
            <h1> Mi Bodeguita Veracruz</h1>
            <Link to="/customers">
                <Button variant="contained" color="success">
                    View all customers
                </Button>
            </Link>
            <Link to="/customers/new">
                <Button variant="contained">Create Customer</Button>
            </Link>
        </div>
    );
}
