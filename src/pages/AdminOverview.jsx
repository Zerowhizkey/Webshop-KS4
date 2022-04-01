import React, { useState } from "react";
import productsState from "../stores/products/atom";
import usersState from "../stores/users/atom";
import { useRecoilValue } from "recoil";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TextField } from "@mui/material";

function AdminOverview() {
	const products = useRecoilValue(productsState);
	const users = useRecoilValue(usersState);
	const [userSearch, setUserSearch] = useState("");
	const [productSearch, setProductSearch] = useState("");
	return (
		<>
			<div style={{ width: "100%", height: "100%" }}>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography>Products</Typography>
					</AccordionSummary>

					<TextField
						required
						id="outlined-required"
						label="Search"
						value={productSearch}
						onChange={(e) => setProductSearch(e.target.value)}
					/>
					{products
						.filter((product) =>
							product.title
								.toLowerCase()
								.includes(productSearch.toLowerCase())
						)
						.map((product) => (
							<AccordionDetails key={product.id}>
								<Typography>{product.title}</Typography>
							</AccordionDetails>
						))}
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel2a-content"
						id="panel2a-header"
					>
						<Typography>Users</Typography>
					</AccordionSummary>
					<TextField
						required
						id="outlined-required"
						label="Search"
						value={userSearch}
						onChange={(e) => setUserSearch(e.target.value)}
					/>
					{users
						.filter((user) =>
							user.username
								.toLowerCase()
								.includes(userSearch.toLowerCase())
						)
						.map((user) => (
							<AccordionDetails key={user.id}>
								<Typography>{user.username}</Typography>
							</AccordionDetails>
						))}
				</Accordion>
			</div>
		</>
	);
}

export default AdminOverview;
