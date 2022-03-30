import React, { useState } from "react";
import Layout from "../components/Layout";
import { Button, Typography, TextField, Grid } from "@mui/material";
import authState from "../stores/auth/atom";
import { useRecoilState } from "recoil";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Navigate } from "react-router-dom";
// import axios from "axios";
// import authState from "../stores/auth/atom";
// import { useRecoilValue, useRecoilState } from "recoil";

function Register() {
	const [auth, setAuth] = useRecoilState(authState);
	const [user, setUser] = useState({
		email: "",
		username: "",
		password: "",
		name: {
			firstname: "",
			lastname: "",
		},
		address: {
			city: "bajsstaden",
			street: "bajskorvgatan23",
			zipcode: "123123",
			number: 123,
		},
		phone: "03430234234	",
	});

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post("https://k4backend.osuka.dev/users", user)
			.then((response) => {
				console.log(response.status);
				console.log(response.data);
				axios
					.post(
						"https://k4backend.osuka.dev/auth/login",
						// { username: "mor_2314", password: "83r5^_" },
						{
							username: response.data.username,
							password: response.data.password,
						}
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
			});
	};
	return (
		<Layout>
			<Grid
				margin={1}
				container
				direction="column"
				justifyContent="center"
				alignItems="center"
				onSubmit={handleSubmit}
				component="form"
				sx={{
					"& .MuiTextField-root": { m: 1, width: "25ch" },
				}}
				noValidate
				autoComplete="off"
				display="flex"
			>
				<Grid item>
					<TextField
						required
						label="First name"
						value={user.name.firstname}
						onChange={(e) =>
							setUser({
								...user,
								name: {
									...user.name,
									firstname: e.target.value,
								},
							})
						}
					/>
				</Grid>
				<Grid item>
					<TextField
						required
						label="Last name"
						value={user.name.lastname}
						onChange={(e) =>
							setUser({
								...user,
								name: {
									...user.name,
									lastname: e.target.value,
								},
							})
						}
					/>
				</Grid>
				<Grid item>
					<TextField
						required
						label="Email"
						type="email"
						value={user.email}
						onChange={(e) =>
							setUser({ ...user, email: e.target.value })
						}
					/>
				</Grid>
				<Grid>
					<TextField
						required
						label="Username"
						value={user.username}
						onChange={(e) =>
							setUser({ ...user, username: e.target.value })
						}
					/>
				</Grid>
				<Grid>
					<TextField
						required
						label="Password"
						type="password"
						value={user.password}
						onChange={(e) =>
							setUser({ ...user, password: e.target.value })
						}
					/>
				</Grid>

				<Button type="submit">Register</Button>
			</Grid>
		</Layout>
	);
}

export default Register;
