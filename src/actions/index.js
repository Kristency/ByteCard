import { SIGN_IN, SIGN_OUT, NEW_CARD, FETCH_CONNECTIONS, FETCH_MY_CARDS } from './types';
import axios from 'axios';

const formUrlEncoded = (x) => Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '');

export const signIn = (currentUser) => {
	return async (dispatch) => {
		const response = await axios({
			method: 'post',
			url: 'https://bytecard.herokuapp.com/api/user/add',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			data: formUrlEncoded({
				thumbnail: currentUser.thumbnail,
				name: currentUser.name,
				email: currentUser.email,
				googleId: currentUser.googleId
			})
		});

		dispatch({
			type: SIGN_IN,
			payload: response.data
		});
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT
	};
};

export const readQRCode = (gId, cardId) => {
	return async (dispatch) => {
		const response = await axios({
			method: 'post',
			url: 'https:/bytecard.herokuapp.com/api/card/add',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			data: formUrlEncoded({
				gid: gId,
				cardId: cardId
			})
		});
		dispatch({
			type: NEW_CARD,
			payload: response.data
		});
	};
};

export const fetchConnections = (gId) => {
	return async (dispatch) => {
		const response = await axios({
			method: 'get',
			url: `https://bytecard.herokuapp.com/api/user/get/allcards/${gId}`
		});

		dispatch({
			type: FETCH_CONNECTIONS,
			payload: response.data
		});
	};
};

export const fetchMyCards = (gId) => {
	return async (dispatch) => {
		const response = await axios({
			method: 'get',
			url: `https:/bytecard.herokuapp.com/api/user/get/mycards/${gId}`
		});

		dispatch({
			type: FETCH_MY_CARDS,
			payload: response.data
		});
	};
};
