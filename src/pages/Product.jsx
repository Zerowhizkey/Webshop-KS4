import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import productsState from "../stores/products/atom";
import SingleProductCard from "../components/SingleProductCard";
import useCart from "../hooks/useCart";

function Product() {
	const { productId } = useParams();
	const cart = useCart();
	const products = useRecoilValue(productsState);
	const product = products.find(
		(product) => product.id.toString() === productId
	);

	return (
		<>
			<div>
				{!product ? (
					"product not found!"
				) : (
					<SingleProductCard
						key={product.id}
						product={product}
						onClick={() => cart.addItem(product.id)}
					/>
				)}
			</div>
		</>
	);
}

export default Product;
