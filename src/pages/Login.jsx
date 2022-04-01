import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Box";
import { useSetRecoilState } from "recoil";
import authState from "../stores/auth/atom";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const setAuth = useSetRecoilState(authState);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post("https://k4backend.osuka.dev/auth/login", {
				username: username,
				password: password,
			})
			.then((response) => {
				axios
					.get(
						`https://k4backend.osuka.dev/users/${response.data.userId}`
					)
					.then((userData) => {
						setAuth({
							user: userData.data,
							token: response.data.token,
						});
					});
				navigate("/profile");
			});
	};

	return (
		<>
			<Grid
				margin={1}
				container
				direction="column"
				justifyContent="center"
				onSubmit={handleSubmit}
				component="form"
				sx={{
					"& .MuiTextField-root": { m: 1, width: "25ch" },
				}}
				noValidate
				autoComplete="off"
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
		</>
	);
}

export default Login;
