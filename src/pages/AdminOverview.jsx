import React from "react";
import Layout from "../components/Layout";
import productsState from "../stores/products/atom";
import usersState from "../stores/users/atom";
import { useRecoilValue } from "recoil";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AdminOverview() {
	const products = useRecoilValue(productsState);
	const users = useRecoilValue(usersState);

	return (
		<Layout>
			<div>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography>Products</Typography>
					</AccordionSummary>
					{products.map((product) => (
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
					{users.map((user) => (
						<AccordionDetails key={user.id}>
							<Typography>{user.username}</Typography>
						</AccordionDetails>
					))}
				</Accordion>
			</div>
		</Layout>
	);
}

export default AdminOverview;

{
	/* {products.map((product) => (
	<Typography >
		{product.title}
	</Typography>
))} */
}

{
	/* //   return (

// <div>
// 
// </div>
// <div>
// {users.map((user) => {
// 	return (
// 		<div key={user.id}>
// 			<div>{user.username}</div>
// 		</div>
// 	);
// })}
// </div> */
}
