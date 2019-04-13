import { combineReducers } from 'redux';

import authReducer from './authReducer';
import connectionsReducer from './connectionsReducer';
import myCardsReducer from './myCardsReducer';

export default combineReducers({
	auth: authReducer,
	connections: connectionsReducer,
	myCards: myCardsReducer
});
