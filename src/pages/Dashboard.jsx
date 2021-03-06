import React, { useState, useEffect } from "react";
import { Button, TextField, Grid } from "@mui/material";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import authState from "../stores/auth/atom";

function Dashboard() {
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
			city: "",
			street: "",
			zipcode: "",
			number: 0,
		},
		phone: "",
	});

	useEffect(() => {
		setUser({
			...auth.user,
			name: { ...auth.user.name },
			address: { ...auth.user.address },
		});
	}, [auth]);

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.patch("https://k4backend.osuka.dev/users/" + auth.user.id, user)
			.then((response) => {
				setAuth({ ...auth, user: response.data });
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

				<Button type="submit">Update</Button>
			</Grid>
		</>
	);
}

export default Dashboard;
