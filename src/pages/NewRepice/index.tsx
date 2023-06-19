import { Controller, useFieldArray, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { alert } from "../../utils/toastifyAlerts";

function NewRecipe() {
	const { register, control, handleSubmit } = useForm({
		defaultValues: {
			title: "",
			time: 30,
			portions: 2,
			vegan: false,
			ingredients: [{ ingredient: "" }],
			instructions: [{ step: "" }],
		},
	});
	const {
		fields: ingredientFields,
		append: appendIngredient,
		remove: removeIngredient,
	} = useFieldArray({
		control,
		name: "ingredients",
	});

	const {
		fields: instructionsFields,
		append: appendStep,
		remove: removeStep,
	} = useFieldArray({
		control,
		name: "instructions",
	});

	const navigate = useNavigate();

	async function onSubmit(data: any) {
		try {
			await api.addNewRecipe(data);
			alert.success("Receita criada com sucesso!");
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="new-recipe">
			<div className="new-recipe__header">
				<div className="title">
					<textarea
						placeholder="Nome da receita"
						rows={3}
						cols={50}
						maxLength={40}
						{...register("title", { required: true })}
					/>
				</div>

				<div className="new-recipe__info">
					<div>
						<label htmlFor="time">Tempo de preparo</label>
						<select {...register("time", { required: true })}>
							<option value="30">Até 30m</option>
							<option value="60">De 30m a 1h</option>
							<option value="90">De 1h a 1h30m</option>
							<option value="120">Mais de 2h</option>
						</select>
					</div>
					<div>
						<label htmlFor="portions">Rendimento</label>
						<select {...register("portions", { required: true })}>
							<option value="2">De 2 a 4 porções</option>
							<option value="5">De 5 a 10 porções</option>
							<option value="10">Mais de 10 porções</option>
						</select>
					</div>

					<div className="switch_button">
						<label className="switch">
							<input type="checkbox" {...register("vegan")} />
							<span className="slider"></span>
						</label>
						<span>Vegano</span>
					</div>
				</div>
			</div>

			<div className="new-recipe__ingredients">
				<h3>Ingredientes</h3>
				{ingredientFields.map((item, index) => (
					<div key={item.id} className="ingredient">
						<Controller
							render={({ field }) => (
								<input {...field} placeholder={"Ingrediente"} required />
							)}
							name={`ingredients.${index}.ingredient`}
							control={control}
						/>
						<button onClick={() => removeIngredient(index)}>x</button>
					</div>
				))}

				<button
					type="button"
					onClick={() => {
						appendIngredient({ ingredient: "" });
					}}
				>
					Adicionar ingrediente
				</button>
			</div>

			<div className="new-recipe__instructions">
				<h3>Instruções de Preparo</h3>
				{instructionsFields.map((item, index) => (
					<div key={item.id} className="instruction">
						<Controller
							render={({ field }) => (
								<input {...field} placeholder={`Passo ${index + 1}`} required />
							)}
							name={`instructions.${index}.step`}
							control={control}
						/>
						<button onClick={() => removeStep(index)}>x</button>
					</div>
				))}
				<button
					type="button"
					onClick={() => {
						appendStep({ step: "" });
					}}
				>
					Adicionar passo
				</button>
			</div>

			<div className="new-recipe__buttons">
				<button type="submit" className="save">
					Salvar
				</button>

				<Link to="/">Voltar</Link>
			</div>
		</form>
	);
}

export default NewRecipe;
