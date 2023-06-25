import { useEffect, useState } from "react";
import { RecipeCard } from "../../components";
import { api } from "../../services/api";
import { IRecipe } from "../../utils/models";
import { alert } from "../../utils/toastifyAlerts";
import { useNavigate } from "react-router-dom";

function Main() {
	const [recipes, setRecipes] = useState<IRecipe[]>([]);

	const navigate = useNavigate();

	useEffect(() => {
		getRecipes();
	}, []);

	async function getRecipes() {
		try {
			const { data } = await api.getRecipes();
			setRecipes(data);
		} catch (error: any) {
			alert.error(error.message);
		}
	}

	return (
		<div className="main-page">
			<div className="main-page__header">
				<h1>Meu Livro de Receitas</h1>
			</div>

			<div className="main-page__recipes">
				{recipes.map((recipe) => (
					<RecipeCard recipe={recipe} key={recipe._id} />
				))}
			</div>

			<div className="main-page__new-recipe">
				<button onClick={() => navigate("/new")}>Adicionar receita</button>
			</div>
		</div>
	);
}

export default Main;
