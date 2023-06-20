import { useEffect, useState } from "react";
import { Header, RecipeCard } from "../../components";
import { IRecipe, api } from "../../services/api";

function Main() {
	const [recipes, setRecipes] = useState<IRecipe[]>([]);

	useEffect(() => {
		getRecipes();
	}, []);

	async function getRecipes() {
		try {
			const { data } = await api.getRecipes();
			setRecipes(data);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className="main-page">
			<Header />

			<div className="main-page__recipes">
				{recipes.map((recipe) => (
					<RecipeCard recipe={recipe} key={recipe._id} />
				))}
			</div>
		</div>
	);
}

export default Main;
