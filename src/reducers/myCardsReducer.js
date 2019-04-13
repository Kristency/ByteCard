import { FETCH_MY_CARDS } from '../actions/types';

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_MY_CARDS:
			return [ ...state, action.payload ];
		default:
			return state;
	}
};
