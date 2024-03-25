import * as React from 'react';
import Navigation from "./Navigation";

// @ts-ignore
const Layout = ({ children}) => {
    return (
        <>
            <Navigation />
            <main>{children}</main>
        </>
    );
};

export default Layout;