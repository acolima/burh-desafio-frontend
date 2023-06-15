import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Main, NewRecipe } from "./pages";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/new" element={<NewRecipe />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
