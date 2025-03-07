import { Bounce, ToastOptions } from 'react-toastify';

export const options: ToastOptions = {
	position: 'top-center',
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: 'light',
	transition: Bounce,
};
