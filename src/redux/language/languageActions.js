import * as actions from './languageActionTypes';

export const saveLanguage = (lang) =>(dispatch) => {
    dispatch({type:actions.SAVE_LANGUAGE, payload:lang})

}