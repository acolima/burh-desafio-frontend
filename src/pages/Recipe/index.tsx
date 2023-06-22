import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { IRecipe } from "../../utils/models";

import {
	IoIosLeaf,
	IoMdRestaurant as Portions,
	IoMdTime as Time,
} from "react-icons/io";
import dayjs from "dayjs";
import { alert } from "../../utils/toastifyAlerts";

function Recipe() {
	const { id } = useParams();
	const [recipe, setRecipe] = useState<IRecipe>();

	useEffect(() => {
		getRecipe();
	}, []);

	async function getRecipe() {
		try {
			const { data } = await api.getRecipe(id!);
			setRecipe(data);
		} catch (error: any) {
			alert.error(error.message);
		}
	}

	return (
		<div className="recipe">
			<div className="recipe__header">
				<h2 className="recipe__header-title">{recipe?.title}</h2>

				<div className="recipe__header-info">
					{recipe?.vegan && (
						<div className="chip">
							<IoIosLeaf /> Receita Vegana
						</div>
					)}
					<div>
						<Time /> {recipe?.time}
					</div>
					<div>
						<Portions /> {recipe?.portions}
					</div>
					<div>
						Adicionada em: {dayjs(recipe?.addedOn).format("DD/MM/YYYY")}
					</div>
				</div>
			</div>

			<div className="recipe__ingredients">
				<h2>Ingredientes</h2>
				<ul>
					{recipe?.ingredients.map((ingredient) => (
						<li>{ingredient.name}</li>
					))}
				</ul>
			</div>

			<div className="recipe__instructions">
				<h2>Modo de Preparo</h2>
				<ol>
					{recipe?.instructions.map((instruction) => (
						<li>{instruction.step}</li>
					))}
				</ol>
			</div>

			<div className="recipe__buttons">
				<button>Editar</button>
				<button>Apagar</button>
			</div>
		</div>
	);
}

export default Recipe;
