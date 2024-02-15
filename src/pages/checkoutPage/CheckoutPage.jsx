import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import {
	removeItem,
	incrementQuantity,
	decrementQuantity,
	emptyCart,
} from "../../redux/slices/cartSlice";
import "./checkoutPage.scss";

const CheckoutPage = ({ history }) => {
	const cartItems = useSelector((state) => state.cart.cartItems);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const totalPrice = cartItems.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);

	const tax = totalPrice * 0.1;

	const grandTotal = totalPrice + tax;

	const handleRemoveItem = (id) => {
		dispatch(removeItem(id));
	};
	const handleIncrementQuantity = (id) => {
		dispatch(incrementQuantity(id));
	};

	const handleDecrementQuantity = (id) => {
		dispatch(decrementQuantity(id));
	};
	const handleClearCart = () => {
		dispatch(emptyCart());
	};

	return (
		<div className="cart">
			<div className="cart__btn">
				<Button
					className="cart__btn_clear-cart"
					variant="contained"
					onClick={handleClearCart}
				>
					Clear Cart
				</Button>
				<Button
					className="cart__btn_return-homepage"
					variant="contained"
					onClick={() => navigate("/")}
				>
					Return to Homepage
				</Button>
			</div>
			<div>
				<div className="cart__main">
					{cartItems.map((el) => (
						<div key={el.id} className="cart__item">
							<img
								className="cart__main__img"
								src={el.imageUrl}
								alt={el.name}
							/>
							<h6 className="cart__main__name">{el.name}</h6>
							<button
								className="cart__item__btn"
								onClick={() => handleRemoveItem(el.id)}
							>
								Remove
							</button>
							<button
								className="cart__main__btn cart__main__btn_minus "
								onClick={() => handleDecrementQuantity(el.id)}
							>
								-
							</button>
							<span className="cart__main__name"> {el.quantity} </span>
							<button
								className="cart__main__btn cart__main__btn_plus"
								onClick={() => handleIncrementQuantity(el.id)}
							>
								+
							</button>
							<p className="cart__main__price"> ${el.price.toFixed(2)}</p>
							<p className="cart__main__price">
								Subtotal ({el.quantity} items): $
								{el.price * el.quantity.toFixed(2)}
							</p>
						</div>
					))}
				</div>
			</div>
			<div className="cart__total">
				<h3 className="cart__total__total-price">
					Total Price: ${totalPrice.toFixed(2)}{" "}
				</h3>
				<h3 className="cart__total__tax">Tax: 10% ${tax.toFixed(2)}</h3>
				<h3 className="cart__total__total-grand">
					Grand Total: ${grandTotal.toFixed(2)}
				</h3>
			</div>
		</div>
	);
};

export default CheckoutPage;
