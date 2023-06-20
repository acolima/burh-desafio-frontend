import axios from "axios";
import dayjs from "dayjs";
import { IRecipe } from "../utils/models";

const baseAPI = axios.create({
	baseURL: "https://crudcrud.com/api/95b718712eec4a2ab581e50858de7c43",
});

function addNewRecipe(newRecipe: IRecipe) {
	const date = dayjs();

	newRecipe = { ...newRecipe, addedOn: date };

	return baseAPI.post("/recipes", newRecipe);
}

async function getRecipes() {
	return baseAPI.get("/recipes");
}

export const api = {
	addNewRecipe,
	getRecipes,
};
