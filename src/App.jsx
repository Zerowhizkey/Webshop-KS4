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
import authState from "./stores/auth/atom";
import { useRecoilValue } from "recoil";
import ErrorPage from "./pages/ErrorPage";
function App() {
	const auth = useRecoilValue(authState);

	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/products/:productId" element={<Product />} />
					<Route path="/cart" element={<Cart />} />
					{auth.token ? (
						<>
							<Route path="/profile" element={<Profile />} />
							{/* <Route path="/account" element={<Account />} /> */}
							<Route path="/dashboard" element={<Dashboard />} />
						</>
					) : (
						<>
							<Route path="/login" element={<Login />} />
							<Route path="/register" element={<Register />} />
						</>
					)}
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
