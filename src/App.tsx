import "./App.css";

import {Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Customers from "./pages/customers/customers";
import {Amplify} from "aws-amplify";
import config from "./amplifyconfiguration.json";
import Payments from "./pages/payments";

Amplify.configure(config);

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/customers" element={<Customers/>}/>
            <Route path="/payments" element={<Payments/>}/>
        </Routes>
    );
}

export default App;
