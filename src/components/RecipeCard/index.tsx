import {
	IoIosLeaf,
	IoMdRestaurant as Portions,
	IoMdTime as Time,
} from "react-icons/io";
import { IRecipe } from "../../utils/models";
import { useNavigate } from "react-router-dom";

interface Props {
	recipe: IRecipe;
}

function RecipeCard({ recipe }: Props) {
	const navigate = useNavigate();
	return (
		<div
			className="recipe-card"
			onClick={() => navigate(`/recipe/${recipe._id}`)}
		>
			<h2>{recipe.title}</h2>

			<div className="recipe-card__info">
				<div>
					<Time /> {recipe.time}
				</div>
				<div>
					<Portions /> {recipe.portions}
				</div>
			</div>

			{recipe.vegan && (
				<div className="recipe-card__chip">
					<IoIosLeaf />
					Vegano
				</div>
			)}
		</div>
	);
}

export default RecipeCard;
