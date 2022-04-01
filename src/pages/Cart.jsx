import React from "react";
import { useRecoilValue } from "recoil";
import productsState from "../stores/products/atom";
import { Grid, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import useCart from "../hooks/useCart";

function Cart() {
	const products = useRecoilValue(productsState);
	const cart = useCart();

	function getTotal() {
		return cart.items.reduce((acc, curr) => {
			const product = products.find((p) => p.id === curr.id);
			return acc + product.price * curr.qty;
		}, 0);
	}

	function getProduct(ci) {
		const product = products.find((p) => p.id === ci.id);
		const quantity = ci.qty;

		return (
			<div key={ci.id}>
				<Grid container padding={5} gap={2}>
					<Grid
						item
						container
						key={product.id}
						direction="row"
						justifyItems="center"
						border={1}
						alignItems="center"
						width="100%"
					>
						<Grid
							item
							xs={3}
							sx={{ display: { xs: "none", sm: "block" } }}
						>
							<img
								src={product.image}
								alt={product.title}
								style={{
									height: "100px",
									width: "100px",
									objectFit: "contain",
									objectPosition: "center",
									display: "block",
								}}
							/>
						</Grid>

						<Grid item xs={4}>
							<Typography>{product.title}</Typography>
						</Grid>
						<Grid item xs={2}>
							<Typography>{product.price}$</Typography>
						</Grid>
						<Grid item xs={6} sm={3}>
							<IconButton
								onClick={() =>
									cart.setItemQty(ci.id, ci.qty - 1)
								}
							>
								<RemoveIcon />
							</IconButton>
							<Typography sx={{ display: "inline" }}>
								{quantity}
							</Typography>
							<IconButton
								onClick={() =>
									cart.setItemQty(ci.id, ci.qty + 1)
								}
							>
								<AddIcon />
							</IconButton>
							<IconButton
								onClick={() => cart.setItemQty(ci.id, 0)}
							>
								<DeleteIcon />
							</IconButton>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}

	return (
		<>
			<Grid container justifyContent="center">
				<Grid item textAlign="center">
					<h1>My Cart</h1>
					{cart.items.map(getProduct)}
					<Typography>
						Total amount: {getTotal().toFixed(2)}$
					</Typography>
				</Grid>
			</Grid>
		</>
	);
}

export default Cart;
