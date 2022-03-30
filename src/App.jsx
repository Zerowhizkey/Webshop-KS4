import React from "react";
import {
	AdminOverview,
	Cart,
	Dashboard,
	ErrorPage,
	Home,
	Login,
	Products,
	Product,
	Profile,
	Register,
} from "./pages/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import authState from "./stores/auth/atom";
import { useRecoilValue } from "recoil";

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
							<Route path="/dashboard" element={<Dashboard />} />
						</>
					) : (
						<>
							<Route path="/login" element={<Login />} />
							<Route path="/register" element={<Register />} />
						</>
					)}
					{auth.user.role === "admin" && (
						<Route path="/adminpanel" element={<AdminOverview />} />
					)}
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
