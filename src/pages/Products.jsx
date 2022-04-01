import React from "react";
import { useRecoilValue } from "recoil";
import productsState from "../stores/products/atom";
import ProductCard from "../components/ProductCard";
import Grid from "@mui/material/Grid";
import useCart from "../hooks/useCart";

function Products() {
	const products = useRecoilValue(productsState);
	const cart = useCart();

	return (
		<>
			<Grid
				container
				spacing={2}
				justifyItems="center"
				justifyContent="center"
			>
				{products.map((product) => {
					return (
						<ProductCard
							key={product.id}
							product={product}
							onClick={() => cart.addItem(product.id)}
						/>
					);
				})}
			</Grid>
		</>
	);
}

export default Products;
