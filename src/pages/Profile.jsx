import React from "react";
import Layout from "../components/Layout";
import { useRecoilValue } from "recoil";
import authState from "../stores/auth/atom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

function Profile() {
	const { user } = useRecoilValue(authState);

	return (
		<Layout>
			<Link to="/adminpanel">admin</Link>
			<TableContainer component={Paper} sx={{ maxWidth: 400 }}>
				<Table sx={{ maxWidth: 400 }} aria-label="simple table">
					<TableBody>
						<TableRow>
							<TableCell>Username:</TableCell>
							<TableCell>{user.username}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Password:</TableCell>
							<TableCell>{user.password}</TableCell>
						</TableRow>

						<TableRow>
							<TableCell>Name:</TableCell>
							<TableCell>{user.name.firstname}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Lastname:</TableCell>
							<TableCell>{user.name.lastname}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>City:</TableCell>
							<TableCell>{user.address.city}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Zipcode:</TableCell>
							<TableCell>{user.address.zipcode}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Adress:</TableCell>
							<TableCell>
								{user.address.street}: {user.address.number}
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Phonenumber:</TableCell>
							<TableCell>{user.phone}</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Role:</TableCell>
							<TableCell>{user.role}</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</Layout>
	);
}

export default Profile;
{
	/* <Link to="/adminpanel">admin</Link>

<Typography>Name:{user.name.firstname}</Typography>
<Typography>Last name:{user.name.lastname}</Typography>
<Typography>Username:{user.username}</Typography>
<Typography>Pass:{user.password}</Typography>
<Typography>Role:{user.role}</Typography>
<Typography>City:{user.address.city}</Typography>
<Typography>Street:{user.address.street}</Typography>
<Typography>road:{user.address.number}</Typography>
<Typography>zipcode:{user.address.zipcode}</Typography>
<Typography>Phone:{user.phone}</Typography> */
}
