const initialState = {
    credentials: []
}

export const credentialsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "STORE_CREDENTIAL" :
            return {
                ...state,
                credentials: action.credentials
            }
        default :
            return state;
    }
}

export const storeCredentials = (credentials: any) => {
    return {
        type: "STORE_CREDENTIAL",
        credentials: credentials
    }
}
