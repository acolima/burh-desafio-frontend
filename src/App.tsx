import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Main, NewRecipe } from "./pages";

function App() {
	return (
		<>
			<ToastContainer />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/new" element={<NewRecipe />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
