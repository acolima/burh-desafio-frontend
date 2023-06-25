import { useEffect, useState } from "react";
import { Loader, RecipeCard } from "../../components";
import { api } from "../../services/api";
import { IRecipe } from "../../utils/models";
import { alert } from "../../utils/toastifyAlerts";
import { useNavigate } from "react-router-dom";

function Main() {
	const [recipes, setRecipes] = useState<IRecipe[]>([]);

	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		getRecipes();
	}, []);

	async function getRecipes() {
		setLoading(true);

		try {
			const { data } = await api.getRecipes();
			setRecipes(data);
		} catch (error: any) {
			alert.error(error.message);
		}

		setLoading(false);
	}

	return (
		<div className="main-page">
			<div className="main-page__header">
				<h1>Meu Livro de Receitas</h1>
			</div>

			<div className="main-page__recipes">
				{loading && <Loader page="main" />}

				{recipes.length === 0 && !loading && (
					<h2 className="no-recipes">Você ainda não tem receitas salvas</h2>
				)}

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
