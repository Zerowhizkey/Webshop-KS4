import React from "react";
import Grid from "@mui/material/Grid";
import useCart from "../hooks/useCart";
import productsState from "../stores/products/atom";
import ProductCard from "../components/ProductCard";
import { useRecoilValue } from "recoil";

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
