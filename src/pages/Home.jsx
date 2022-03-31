import { Typography } from "@mui/material";
import React from "react";
import Layout from "../components/Layout";

function Home() {
	return (
		<Layout>
			<div>
				<h1>Piri's Great Store</h1>
				<Typography textAlign="center">Take a look around!</Typography>
			</div>
		</Layout>
	);
}

export default Home;
