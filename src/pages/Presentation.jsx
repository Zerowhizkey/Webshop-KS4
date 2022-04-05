import { Typography } from "@mui/material";
import React from "react";

function Presentation() {
	return (
		<>
			<Typography
				color="secondary"
				textAlign="center"
				padding={1}
				border={1}
			>
				Dependencies
				<Typography color="primary" margin={2} padding={1} border={1}>
					Vite
				</Typography>
				<Typography color="primary" margin={2} padding={1} border={1}>
					React
				</Typography>
				<Typography color="primary" margin={2} padding={1} border={1}>
					React-Router
				</Typography>
				<Typography color="primary" margin={2} padding={1} border={1}>
					Recoil
				</Typography>
				<Typography color="primary" margin={2} padding={1} border={1}>
					Axios
				</Typography>
				<Typography color="primary" margin={2} padding={1} border={1}>
					Material UI
				</Typography>
				<Typography color="primary" margin={2} padding={1} border={1}>
					Boring-Avatars
				</Typography>
			</Typography>
		</>
	);
}

export default Presentation;
