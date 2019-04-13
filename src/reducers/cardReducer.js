import { NEW_CARD } from '../actions/types';

export default (state = [], action) => {
	switch (action.type) {
		case NEW_CARD:
			return [ ...state, action.payload ];
		default:
			return state;
	}
};
