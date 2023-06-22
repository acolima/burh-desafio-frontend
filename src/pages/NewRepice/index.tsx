import { Controller, useFieldArray, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { alert } from "../../utils/toastifyAlerts";

function NewRecipe() {
	const { register, control, handleSubmit } = useForm({
		defaultValues: {
			title: "",
			time: "Até 30m",
			portions: "De 2 a 4 porções",
			vegan: false,
			ingredients: [{ name: "" }],
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
		} catch (error: any) {
			alert.error(error.message);
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
						maxLength={50}
						{...register("title", { required: true })}
					/>
				</div>

				<div className="new-recipe__info">
					<div>
						<label htmlFor="time">Tempo de preparo</label>
						<select {...register("time", { required: true })}>
							<option value="Até 30m">Até 30m</option>
							<option value="De 30m a 1h">De 30m a 1h</option>
							<option value="De 1h a 1h30m">De 1h a 1h30m</option>
							<option value="Mais de 2h">Mais de 2h</option>
						</select>
					</div>
					<div>
						<label htmlFor="portions">Rendimento</label>
						<select {...register("portions", { required: true })}>
							<option value="De 2 a 4 porções">De 2 a 4 porções</option>
							<option value="De 5 a 10 porções">De 5 a 10 porções</option>
							<option value="Mais de 10 porções">Mais de 10 porções</option>
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
							name={`ingredients.${index}.name`}
							control={control}
						/>
						<button onClick={() => removeIngredient(index)}>x</button>
					</div>
				))}

				<button
					type="button"
					onClick={() => {
						appendIngredient({ name: "" });
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
