import React from "react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
// import Account from "./pages/Account";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/products/:productId" element={<Product />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/profile" element={<Profile />} />
					{/* <Route path="/account" element={<Account />} /> */}
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
