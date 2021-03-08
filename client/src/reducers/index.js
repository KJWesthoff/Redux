import {combineReducers} from 'redux';
import reducer from './reduxReducers';


const rootReducer = combineReducers({
    reducer: reducer
});



export default rootReducer;