import styled from "styled-components";

const Container = styled.div({
	width: "90%",
	backgroundColor: "#282828",
	color: "white",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "10px",
	padding: "10px",
	borderRadius: "10px",
});

const Title = styled.h2({
	color: "white",
	textAlign: "center",
});

const Infos = styled.div({
	display: "flex",
	gap: "20px",
});

const Chips = styled.div({
	backgroundColor: "#ea777b",
	color: "#1F1F1F",
	padding: "7px",
	borderRadius: "15px",
});

export { Chips, Container, Infos, Title };
