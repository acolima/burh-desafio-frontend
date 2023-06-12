import { IoIosAddCircle as AddRecipe } from "react-icons/io";
import { AddButton, Container, PageTitle } from "./styles";

function Header() {
	return (
		<Container>
			<PageTitle>Meu Livro de Receitas</PageTitle>

			<AddButton>
				<AddRecipe />
			</AddButton>
		</Container>
	);
}

export default Header;
