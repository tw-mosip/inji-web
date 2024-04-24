import {storage} from "../../utils/storage";

const initialState = {
    language: storage.getItem(storage.SELECTED_LANGUAGE) ? storage.getItem(storage.SELECTED_LANGUAGE) : 'en'
}

export const commonReducer = (state = initialState, actions: any) => {
    switch (actions.type) {
        case 'STORE_LANGUAGE': {
            return {
                ...state,
                language: actions.language
            }
        }
        default :
            return state;
    }
}

export const storeLanguage = (language: string) => {
    return {
        type: 'STORE_LANGUAGE',
        language: language
    }
}
