import { IoIosAddCircle as AddRecipe } from "react-icons/io";

function Header() {
	return (
		<div className="header">
			<h1>Meu Livro de Receitas</h1>

			<button>
				<AddRecipe />
			</button>
		</div>
	);
}

export default Header;
