import { IoMdRestaurant as Portions, IoMdTime as Time } from "react-icons/io";

import { Chips, Container, Infos, Title } from "./styles";

function Recipe() {
	return (
		<Container>
			<Title>Bolo de Murango</Title>

			<Infos>
				<span>
					<Time /> 45 minutos
				</span>
				<span>
					<Portions /> 4 a 6 porções
				</span>
			</Infos>

			<Chips>Vegano</Chips>
		</Container>
	);
}

export default Recipe;
