import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "../stores/cart/atom";
import productsState from "../stores/products/atom";
import Layout from "../components/Layout";
import { Grid, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Cart() {
	const products = useRecoilValue(productsState);
	const [cart, setCart] = useRecoilState(cartState);

	// setQty Gör allt dem 3 nedre gör + mer

	// function handleRemove(id) {
	// 	setCart(cart.filter((ci) => ci.id !== id));
	// }

	// function handleAdd(id) {
	// 	setCart(
	// 		cart.map((ci) => (ci.id === id ? { ...ci, qty: ci.qty + 1 } : ci))
	// 	);
	// }

	// function handleDecrese(id) {
	// 	setCart(
	// 		cart.map((ci) => (ci.id === id ? { ...ci, qty: ci.qty - 1 } : ci))
	// 	);
	// }

	function setQty(id, qty) {
		setCart(
			cart
				.map((ci) => (ci.id === id ? { ...ci, qty } : ci))
				.filter((ci) => ci.qty > 0)
		);
	}

	function getTotal() {
		return cart.reduce((acc, curr) => {
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
								alt={product.name}
								style={{
									height: "100px",
									width: "150px",
									objectFit: "cover",
									objectPosition: "center",
									display: "block",
								}}
							/>
						</Grid>

						<Grid item xs={4}>
							<Typography>{product.name}</Typography>
						</Grid>
						<Grid item xs={2}>
							<Typography>{product.price}$</Typography>
						</Grid>
						<Grid item xs={6} sm={3}>
							<IconButton
								value={product.qty}
								onClick={() => setQty(ci.id, ci.qty - 1)}
							>
								<RemoveIcon />
							</IconButton>
							<Typography sx={{ display: "inline" }}>
								{quantity}
							</Typography>
							<IconButton
								onClick={() => setQty(ci.id, ci.qty + 1)}
							>
								<AddIcon />
							</IconButton>
							<IconButton onClick={() => setQty(ci.id, 0)}>
								<DeleteIcon />
							</IconButton>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}

	return (
		<Layout>
			<div>
				<h1>Min cart</h1>
				{cart.map(getProduct)}
				<Typography>Total amount: {getTotal().toFixed(2)}$</Typography>
			</div>
		</Layout>
	);
}

export default Cart;
