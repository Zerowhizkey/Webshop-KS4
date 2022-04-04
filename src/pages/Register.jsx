import React, { useState } from "react";
import { Button, TextField, Grid } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import authState from "../stores/auth/atom";

function Register() {
	const setAuth = useSetRecoilState(authState);
	const [user, setUser] = useState({
		email: "",
		username: "",
		password: "",
		name: {
			firstname: "",
			lastname: "",
		},
		address: {
			city: "Stockholm",
			street: "Ringvägen",
			zipcode: "17298",
			number: 23,
		},
		phone: "+46707092356",
	});

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("https://k4backend.osuka.dev/users", user)
			.then((response) => {
				axios
					.post("https://k4backend.osuka.dev/auth/login", {
						username: response.data.username,
						password: response.data.password,
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
								navigate("/profile");
							});
					});
			});
	};
	return (
		<>
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
		</>
	);
}

export default Register;
