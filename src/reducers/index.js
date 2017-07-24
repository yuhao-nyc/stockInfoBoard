import { combineReducers } from 'redux';
import reducer_data from './reducer_data';

const rootReducer = combineReducers({
    stocks: reducer_data
});

export default rootReducer;
