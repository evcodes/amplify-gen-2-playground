import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {Amplify} from "aws-amplify";
import config from "./amplifyconfiguration.json";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import ErrorPage from "./pages/error";
import Customer from "./pages/customers/customers";
import Units from "./pages/units";
import Payments from "./pages/payments";
import CreateCustomer from "./pages/customers/createCustomer";
import EditCustomer from "./pages/customers/editCustomer";
import CustomerDetail from "./pages/customers/customerDetail";
import Layout from "./components/Layout";

const NavbarWrapper = () =>{
    return (
        <Layout>
            <Outlet/>
        </Layout>
    )
};

const router = createBrowserRouter([

    {
        path: "/",
        element: <NavbarWrapper/>,
        children:[
            {
                path: "/",
                element: <App/>
            },
            {
                path: "/customers",
                children: [
                    {index: true, element: <Customer/>},
                    {path: "new", element: <CreateCustomer/>},
                    {path: "details/:id", element: <CustomerDetail/>},
                    {path: "edit", element: <EditCustomer/>},
                ],
            },
            {
                path: "/units",
                element: <Units/>,
            },
            {
                path: "/payments",
                element: <Payments/>,
            },
        ],
        errorElement: <ErrorPage/>
    },
]);




Amplify.configure(config);
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
// @ts-ignore
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
