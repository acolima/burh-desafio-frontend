import styled from "styled-components";

const Container = styled.div({
	width: "90%",
	height: "70px",
	display: "flex",
});

const PageTitle = styled.h1({
	fontSize: "30px",
	color: "white",
	textAlign: "left",
});

const AddButton = styled.button({
	color: "white",
	width: "70px",
	fontSize: "2.5em",
	textAlign: "center",
});

export { AddButton, Container, PageTitle };
