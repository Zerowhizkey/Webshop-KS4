import React from "react";
import Layout from "../components/Layout";
import productsState from "../stores/products/atom";
import usersState from "../stores/users/atom";
import { useRecoilValue } from "recoil";
function AdminOverview() {
	const products = useRecoilValue(productsState);
	const users = useRecoilValue(usersState);
	return (
		<Layout>
			<div>
				{products.map((product) => {
					return (
						<div key={product.id}>
							<div>{product.title}</div>
						</div>
					);
				})}
			</div>
			<div>
				{users.map((user) => {
					return (
						<div key={user.id}>
							<div>{user.name.firstname}</div>
						</div>
					);
				})}
			</div>
		</Layout>
	);
}

export default AdminOverview;
