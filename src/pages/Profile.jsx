import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function Profile() {
	return (
		<Layout>
			<Link to="/login">login</Link>
			<div>Profile</div>
		</Layout>
	);
}

export default Profile;
