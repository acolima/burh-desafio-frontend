import { Header, Recipe } from "../../components";

function Main() {
	return (
		<div className="main-page">
			<Header />

			<div className="main-page__recipes">
				<Recipe />
				<Recipe />
				<Recipe />
				<Recipe />
				<Recipe />
				<Recipe />
			</div>
		</div>
	);
}

export default Main;
