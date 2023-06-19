import axios from "axios";
import dayjs from "dayjs";

const BASE_URL = import.meta.env.VITE_BASE_URL;

type Recipe = {
	title: string;
	time: number;
	portions: number;
	ingredients: {
		ingredient: string;
	}[];
	instructions: {
		instruction: string;
	}[];
	addedOn: dayjs.Dayjs;
};

const baseAPI = axios.create({
	baseURL: BASE_URL,
});

function addNewRecipe(newRecipe: Recipe) {
	const date = dayjs();

	newRecipe = { ...newRecipe, addedOn: date };

	return baseAPI.post("/recipes", newRecipe);
}

export const api = {
	addNewRecipe,
};
