interface ModalProps {
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
	deleteRecipe: () => void;
}

function Modal({ deleteRecipe, setShowModal }: ModalProps) {
	return (
		<div className="modal">
			<h2>Deseja apagar a receita?</h2>

			<div className="modal__buttons">
				<button className="yes" onClick={() => deleteRecipe()}>
					Sim
				</button>
				<button className="no" onClick={() => setShowModal(false)}>
					Cancelar
				</button>
			</div>
		</div>
	);
}

export default Modal;
