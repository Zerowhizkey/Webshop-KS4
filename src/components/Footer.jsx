import React from "react";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

function Footer() {
	return (
		<footer>
			<Stack
				direction="row"
				divider={<Divider orientation="vertical" flexItem />}
				spacing={2}
				bottom={0}
			>
				<Typography> © 2020 Copyright</Typography>
				<Typography>Marcus Piri</Typography>
				<Typography>PGS</Typography>
			</Stack>
		</footer>
	);
}

export default Footer;
