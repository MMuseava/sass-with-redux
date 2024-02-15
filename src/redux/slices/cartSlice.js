import { createSlice } from "@reduxjs/toolkit";
import { products } from "./dummyData";

const initialState = {
	allItems: products,
	cartItems: [],
	totalPrice: 0,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem: (state, action) => {
			const newItem = action.payload;
			const existingItem = state.cartItems.find(
				(item) => item.id === newItem.id
			);

			if (existingItem) {
				// If item already exists in cart, increase its quantity
				existingItem.quantity += 0;
			} else {
				// If item is not in cart, add it with quantity 1
				state.cartItems.push({ ...newItem, quantity: 1 });
			}

			// Update total price
			state.totalPrice += newItem.price;
		},
		removeItem: (state, action) => {
			const idToRemove = action.payload;
			state.cartItems = state.cartItems.filter(
				(item) => item.id !== idToRemove
			);
		},
		emptyCart: (state) => {
			state.cartItems = [];
			state.totalPrice = 0;
		},
		incrementQuantity: (state, action) => {
			const idToUpdate = action.payload;
			const itemToUpdate = state.cartItems.find(
				(item) => item.id === idToUpdate
			);
			if (itemToUpdate) {
				itemToUpdate.quantity += 1;
			}
		},
		decrementQuantity: (state, action) => {
			const idToUpdate = action.payload;
			const itemToUpdate = state.cartItems.find(
				(item) => item.id === idToUpdate
			);
			if (itemToUpdate && itemToUpdate.quantity > 1) {
				itemToUpdate.quantity -= 1;
			}
		},
	},
});

export const {
	addItem,
	removeItem,
	emptyCart,
	incrementQuantity,
	decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
