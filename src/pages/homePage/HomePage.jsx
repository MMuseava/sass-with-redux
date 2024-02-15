import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/productCard/ProductCard";
import { addItem } from "../../redux/slices/cartSlice";
import "./homePage.style.scss";

const HomePage = () => {
	const { allItems } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const handleAddToCart = (product) => {
		dispatch(addItem(product));
	};

	return (
		<div>
			<div className="product-list">
				{allItems.map((el, index) => (
					<ProductCard
						key={index}
						product={el}
						addItem={() => handleAddToCart(el)}
					/>
				))}
			</div>
		</div>
	);
};

export default HomePage;
