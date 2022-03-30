import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Layout from "../components/Layout";
import Grid from "@mui/material/Box";
import { useRecoilValue, useRecoilState } from "recoil";
import authState from "../stores/auth/atom";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const users = useRecoilValue(authState);
	const [auth, setAuth] = useRecoilState(authState);
	console.log(users);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

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
				navigate("/profile");
			});
	};

	return (
		<Layout>
			<Grid
				margin={1}
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

				// alignItems="center"
			>
				<Grid item>
					<TextField
						required
						id="outlined-required"
						label="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</Grid>
				<Grid item>
					<TextField
						id="outlined-password-input"
						label="Password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Grid>

				<Button type="submit">Log In</Button>
			</Grid>
			<Typography padding={1} textAlign="center">
				Not a user ? <Link to="/register">Sign Up!</Link>
			</Typography>
		</Layout>
	);
}

export default Login;
