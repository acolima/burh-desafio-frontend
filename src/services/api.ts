import axios from "axios";
import dayjs from "dayjs";
import { IRecipe } from "../utils/models";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const baseAPI = axios.create({
	baseURL: BASE_URL,
});

function addNewRecipe(newRecipe: IRecipe) {
	const date = dayjs();

	newRecipe = { ...newRecipe, addedOn: date };

	return baseAPI.post("/recipes", newRecipe);
}

async function getRecipes() {
	return baseAPI.get("/recipes");
}

async function getRecipe(id: string) {
	return baseAPI.get(`/recipes/${id}`);
}

async function deleteRecipe(id: string) {
	return baseAPI.delete(`/recipes/${id}`);
}

async function editRecipe(recipe: IRecipe, id: string) {
	return baseAPI.put(`/recipes/${id}`, recipe);
}

export const api = {
	addNewRecipe,
	deleteRecipe,
	editRecipe,
	getRecipe,
	getRecipes,
};
