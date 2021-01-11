import {combineReducers} from 'redux';
import languageReducer from './language/languageReducer'

const rootReducer = combineReducers({
    language: languageReducer,
})

export default rootReducer;
