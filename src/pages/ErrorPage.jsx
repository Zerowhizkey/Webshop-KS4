import { Grid, Typography } from "@mui/material";
import React from "react";

function ErrorPage() {
	return (
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
