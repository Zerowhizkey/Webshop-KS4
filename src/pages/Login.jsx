import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Layout from "../components/Layout";
import Grid from "@mui/material/Box";
import { useRecoilValue, useRecoilState } from "recoil";
import authState from "../stores/auth/atom";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const users = useRecoilValue(authState);
	const [auth, setAuth] = useRecoilState(authState);
	console.log(users);

	// const [data, setData] = useState({
	// 	username: username,
	// 	password: password,
	// });

	const handleSubmit = (e) => {
		e.preventDefault();
		// authState = {
		// 	username: data.username,
		// 	password: data.password,
		// };
		// eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
		// eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
		axios
			.post(
				"https://k4backend.osuka.dev/auth/login",
				// { username: "mor_2314", password: "83r5^_" },
				{ username: username, password: password },
				users
			)
			.then((response) => {
				console.log(response.status);
				console.log(response.data.token);
				setAuth({
					...auth,
					token: response.data.token,
				});
			});
	};

	if (auth.token) return <Navigate to="/profile" />;

	return (
		<Layout>
			<Grid
				container
				direction="row"
				justifyContent="center"
				onSubmit={handleSubmit}
				component="form"
				sx={{
					"& .MuiTextField-root": { m: 1, width: "25ch" },
				}}
				noValidate
				autoComplete="off"
				display="flex"
				alignItems="center"
			>
				<Grid item>
					<TextField
						required
						id="outlined-required"
						label="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<TextField
						id="outlined-password-input"
						label="Password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Button type="submit">Log In</Button>
					<Typography padding={1}>
						Not a user ? <Link to="/register">Sign Up!</Link>
					</Typography>
				</Grid>
			</Grid>
		</Layout>
	);
}

export default Login;

// const App = () => {
// 	return (
// 		<div>
// 			<h1>Login Account</h1>
// 			<form onSubmit={handleSubmit}>
// 				<label htmlFor="email">
// 					Email
// 					<input
// 						type="email"
// 						name="email"
// 						value={data.email}
// 						onChange={handleChange}
// 					/>
// 				</label>
// 				<label htmlFor="password">
// 					Password
// 					<input
// 						type="password"
// 						name="password"
// 						value={data.password}
// 						onChange={handleChange}
// 					/>
// 				</label>
// 				<button type="submit">Login</button>
// 			</form>
// 		</div>
// 	);
// };
