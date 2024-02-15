import PropTypes from "prop-types";
import "./productCard.style.scss";

const ProductCard = ({ product, addItem }) => {
	const { name, price, imageUrl, stockCount, id } = product;
	return (
		<div className="product">
			<img className="product__img" src={imageUrl} width={"200px"} alt="name" />
			<h6 className="product__name"> {name} </h6>
			<p className="product__price">{price}</p>
			{stockCount ? (
				<button className="product__btn product__btn_active" onClick={addItem}>
					Add To Card
				</button>
			) : (
				<button className="product__btn product__btn_muted" disabled>
					Out OF Stock
				</button>
			)}
		</div>
	);
};
ProductCard.propTypes = {
	product: PropTypes.object.isRequired,
	addItem: PropTypes.func.isRequired,
};
export default ProductCard;
