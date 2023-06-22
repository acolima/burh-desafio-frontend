import dayjs from "dayjs";

export interface IRecipe {
	_id: string;
	title: string;
	time: string;
	portions: string;
	vegan: boolean;
	ingredients: {
		name: string;
	}[];
	instructions: {
		step: string;
	}[];
	addedOn: dayjs.Dayjs;
}
