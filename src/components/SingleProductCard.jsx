import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { cartState } from "../stores/cart/atom";
import { useRecoilState } from "recoil";

function SingleProductCard({ product }) {
	const [cart, setCart] = useRecoilState(cartState);

	function handleAddToCart() {
		const newCartItem = {
			id: product.id,
			qty: 1,
		};

		setCart([...cart, newCartItem]);
	}
	return (
		<Grid item margin={2} align="center" md={3} sm={4} xs={12}>
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					component="img"
					alt={product.title}
					height="140"
					image={product.image}
				/>
				<CardContent>
					<Typography gutterBottom variant="h6" component="div">
						{product.name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{product.description}
					</Typography>
					<Button onClick={handleAddToCart}>Add</Button>
				</CardContent>
				<CardActions></CardActions>
			</Card>
		</Grid>
	);
}

export default SingleProductCard;
