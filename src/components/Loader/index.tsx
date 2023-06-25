interface Props {
	page: string;
}

function Loader({ page }: Props) {
	if (page === "recipe") {
		return (
			<div className="recipe-page-skeleton">
				<div className="title"></div>
				<div className="info"></div>
				<div className="ingredients"></div>
				<div className="instructions"></div>
			</div>
		);
	}

	return (
		<>
			<div className="main-page-skeleton"></div>
			<div className="main-page-skeleton"></div>
			<div className="main-page-skeleton"></div>
			<div className="main-page-skeleton"></div>
		</>
	);
}

export default Loader;
