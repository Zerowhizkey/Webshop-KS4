import { Grid, Typography } from "@mui/material";
import React from "react";
import Layout from "../components/Layout";

function ErrorPage() {
	return (
		<Layout>
			<Grid container justifyContent="center" alignItems="center">
				<Grid item>
					<Typography>Page Not Found !</Typography>
				</Grid>
			</Grid>
		</Layout>
	);
}

export default ErrorPage;
