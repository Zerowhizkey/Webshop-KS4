import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
	return (
		<div className="layout">
			<Header />
			<div className="content">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}

export default Layout;
