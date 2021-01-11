import * as actions from './languageActionTypes';

const initialStore = {
    language: 'RU',
};

const languageReducer = (store = initialStore , action) =>{
    switch(action.type){
        case actions.SAVE_LANGUAGE:
            return {...store, language: action.payload};
        default:
                return store;
    }
}

export default languageReducer;