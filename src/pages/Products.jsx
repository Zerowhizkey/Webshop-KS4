import React from "react";
import Layout from "../components/Layout";
import { useRecoilValue } from "recoil";
import productsState from "../stores/products/atom";
import ProductCard from "../components/ProductCard";
import Grid from "@mui/material/Grid";
function Products() {
  const products = useRecoilValue(productsState);

  return (
    <Layout>
      <Grid container spacing={2} justifyItems="center" justifyContent="center">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </Grid>
    </Layout>
  );
}

export default Products;
