import axios from "axios";
import dayjs from "dayjs";
import { IRecipe } from "../utils/models";

const baseAPI = axios.create({
	baseURL: "https://crudcrud.com/api/d2702def5eda4dcca1b0fbbd877f49af",
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
