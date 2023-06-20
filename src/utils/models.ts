import dayjs from "dayjs";

export interface IRecipe {
	_id: string;
	title: string;
	time: string;
	portions: string;
	vegan: boolean;
	ingredients: {
		ingredient: string;
	}[];
	instructions: {
		instruction: string;
	}[];
	addedOn: dayjs.Dayjs;
}
