import { useEffect } from "react";

const unmount = () => console.log("unmount");

const Product = () => {
	useEffect(() => {
		// Efecto secundario principal
	}, []);

	useEffect(() => {
		return () => unmount();
	}, []);

	return <div>Product</div>;
};

export default Product;
