import { SIGN_IN, SIGN_OUT } from './types';

export const signIn = (currentUser) => {
	return {
		type: SIGN_IN,
		payload: currentUser
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT
	};
};
