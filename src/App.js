import { Route, Routes } from "react-router-dom";
import "./App.scss";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage";
import HomePage from "./pages/homePage/HomePage";
import Navigation from "./components/navigation/Navigation";

function App() {
	return (
		<div className="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/checkout" element={<CheckoutPage />} />
			</Routes>
		</div>
	);
}

export default App;
