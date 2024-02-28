import React from "react";
import AdminNav from "./adminNav";
import "../../styles/globals.scss";
import "../../styles/admin.scss";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = (props : LayoutProps) => {
    return (
        <html lang="en">
            <body className="bg-darkest">
                <AdminNav />
                {props.children}
            </body>
        </html>
    );
};

export default Layout;