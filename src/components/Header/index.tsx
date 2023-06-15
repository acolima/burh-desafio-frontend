import { IoIosAddCircle as AddRecipe } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Header() {
	const navigate = useNavigate();

	return (
		<div className="header">
			<h1>Meu Livro de Receitas</h1>

			<button onClick={() => navigate("/new")}>
				<AddRecipe />
			</button>
		</div>
	);
}

export default Header;
