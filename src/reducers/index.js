import { combineReducers } from 'redux';

import authReducer from './authReducer';
import connectionsReducer from './connectionsReducer';

export default combineReducers({
	auth: authReducer,
	connections: connectionsReducer
});
