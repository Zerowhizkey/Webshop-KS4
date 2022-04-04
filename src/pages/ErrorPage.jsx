import React from "react";
import { Grid, Typography } from "@mui/material";
import { useLocation, Navigate } from "react-router-dom";

function ErrorPage() {
	const { pathname } = useLocation();

	return ["/profile", "/dashboard"].includes(pathname) ? (
		<Navigate to="/login" />
	) : (
		<>
			<Grid container justifyContent="center" alignItems="center">
				<Grid item>
					<Typography>Page Not Found !</Typography>
				</Grid>
			</Grid>
		</>
	);
}

export default ErrorPage;
