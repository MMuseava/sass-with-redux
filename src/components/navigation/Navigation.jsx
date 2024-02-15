import React from "react";
import { SlBasket } from "react-icons/sl";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import "./navigation.scss";
const Navigation = () => {
	const cartItems = useSelector((state) => state.cart.cartItems);

	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/checkout">
							<SlBasket />
						</Link>
						<span> {cartItems.length} </span>
						<p>cart</p>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navigation;
