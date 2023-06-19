import { toast } from "react-toastify";

function error(message: string) {
	toast.error(message, { position: toast.POSITION.TOP_CENTER });
}

function success(message: string) {
	toast.success(message, { position: toast.POSITION.TOP_CENTER });
}

export const alert = {
	error,
	success,
};
