import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

const App = () => {
	const INITIAL_CART_ITEMS = ["Product 1", "Product 2"];
	const [cartItems, setCartItems] = useState(INITIAL_CART_ITEMS);

	const handleClear = () => {
		setCartItems([]);
	};

	return (
		<div>
			<NavBar cartItemsCount={cartItems.length} />
			<Cart cartItems={cartItems} onClear={handleClear} />
		</div>
	);
};

export default App;
