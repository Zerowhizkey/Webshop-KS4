import { cartState } from "../stores/cart/atom";
import { useRecoilState } from "recoil";

function useCart() {
	const [cart, setCart] = useRecoilState(cartState);

	function setItemQty(id, qty) {
		setCart(
			cart
				.map((ci) => (ci.id === id ? { ...ci, qty } : ci))
				.filter((ci) => ci.qty > 0)
		);
	}

	function getItemQty(id) {
		const item = cart.find((ci) => ci.id === id);
		return !item ? 0 : item.qty;
	}

	function addItem(id) {
		const qty = getItemQty(id);
		if (qty > 0) {
			setItemQty(id, qty + 1);
			return;
		}
		setCart([...cart, { id, qty: 1 }]);
	}
	return {
		items: cart,
		setItemQty,
		getItemQty,
		addItem,
	};
}

export default useCart;
