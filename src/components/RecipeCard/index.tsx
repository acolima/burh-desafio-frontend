import {
	IoIosLeaf,
	IoMdRestaurant as Portions,
	IoMdTime as Time,
} from "react-icons/io";
import { IRecipe } from "../../utils/models";

interface Props {
	recipe: IRecipe;
}

function RecipeCard({ recipe }: Props) {
	return (
		<div className="recipe">
			<h2>{recipe.title}</h2>

			<div className="recipe__info">
				<div>
					<Time />
					<span>{recipe.time}</span>
				</div>
				<div>
					<Portions /> {recipe.portions}
				</div>
			</div>

			{recipe.vegan && (
				<div className="recipe__chip">
					<IoIosLeaf />
					Vegano
				</div>
			)}
		</div>
	);
}

export default RecipeCard;
