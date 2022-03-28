import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import productsState from "../stores/products/atom";
import SingleProductCard from "../components/SingleProductCard";
import Layout from "../components/Layout";

function Product() {
  const { productId } = useParams();
  const products = useRecoilValue(productsState);
  const product = products.find(
    (product) => product.id.toString() === productId
  );

  return (
    <Layout>
      <div>
        {!product ? (
          "product not found!"
        ) : (
          <SingleProductCard key={product.id} product={product} />
        )}
      </div>
    </Layout>
  );
}

export default Product;
