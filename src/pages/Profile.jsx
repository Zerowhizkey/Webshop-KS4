import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { useRecoilValue } from "recoil";
import authState from "../stores/auth/atom";
import { Typography } from "@mui/material";

function Profile() {
	const { user } = useRecoilValue(authState);
	return (
		<Layout>
			<Link to="/login">login</Link>
			<Link to="/adminpanel">admin</Link>

			<Typography>Name:{user.name.firstname}</Typography>
			<Typography>Last name:{user.name.lastname}</Typography>
			<Typography>Username:{user.username}</Typography>
			<Typography>Pass:{user.password}</Typography>
			<Typography>Role:{user.role}</Typography>
			<Typography>City:{user.address.city}</Typography>
			<Typography>Street:{user.address.street}</Typography>
			<Typography>road:{user.address.number}</Typography>
			<Typography>zipcode:{user.address.zipcode}</Typography>
			<Typography>Phone:{user.phone}</Typography>
		</Layout>
	);
}

export default Profile;
