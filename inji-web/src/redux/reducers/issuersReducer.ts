const initialState = {
    issuers: [],
    selected_issuer: {}
}

export const issuersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "STORE_ISSUERS" :
            return {
                ...state,
                issuers: action.issuers
            }
        case "STORE_SELECTED_ISSUER" :
            return {
                ...state,
                selected_issuer: action.issuers
            }
        default:
            return state
    }
}

export const storeIssuers = (issuers: any) => {
    return {
        type: "STORE_ISSUERS",
        issuers: issuers
    }
}

export const storeSelectedIssuer = (issuer: any) => {
    return {
        type: "STORE_SELECTED_ISSUER",
        issuers: issuer
    }
}


