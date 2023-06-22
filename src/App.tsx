import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Main, NewRecipe, Recipe } from "./pages";

function App() {
	return (
		<>
			<ToastContainer />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/new" element={<NewRecipe />} />
					<Route path="/recipe/:id" element={<Recipe />} />
					<Route path="/recipe/:id/edit" element={<NewRecipe />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
