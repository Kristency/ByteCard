import { SIGN_IN, SIGN_OUT } from './types';
import axios from 'axios';

const formUrlEncoded = (x) => Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '');

export const signIn = (currentUser) => {
	axios({
		method: 'post',
		url: 'https://bytecard.herokuapp.com/api/user/add',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		data: formUrlEncoded({
			thumbnail: currentUser.thumbnail,
			name: currentUser.name,
			email: currentUser.email,
			googleId: currentUser.googleId
		})
	})
		.then(function(response) {
			console.log(response.data);
		})
		.catch(function(error) {
			console.log(error);
		});
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
