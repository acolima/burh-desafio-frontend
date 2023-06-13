import { IoMdRestaurant as Portions, IoMdTime as Time } from "react-icons/io";

function Recipe() {
	return (
		<div className="recipe">
			<h2>Bolo de Murango</h2>

			<div className="recipe__info">
				<span>
					<Time /> 45 minutos
				</span>
				<span>
					<Portions /> 4 a 6 porções
				</span>
			</div>

			<div className="recipe__tags">
				<div className="recipe__tags-chip">Vegano</div>
				<div className="recipe__tags-chip">Vegano</div>
				<div className="recipe__tags-chip">Vegano</div>
			</div>
		</div>
	);
}

export default Recipe;
