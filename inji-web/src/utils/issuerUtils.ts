import {storage} from "./storage";
import sha256 from 'crypto-js/sha256';
import Base64 from 'crypto-js/enc-base64';

export const getCurrentIssuerConfiguration = () => {
    const current_issuer = storage.getItem(storage.SELECTED_ISSUER);
    return current_issuer
}

export const getESignetRedirectURL = (currentIssuer, state: string, code_challenge) => {
    return `${currentIssuer.authorization_endpoint}` +
        `?response_type=code&` +
        `client_id=${currentIssuer.client_id}&` +
        `scope=${currentIssuer.scopes_supported[0]}&` +
        `redirect_uri=http://localhost:3001/redirect&` +
        `state=${state}&` +
        `code_challenge=${code_challenge.codeChallenge}&` +
        `code_challenge_method=S256`;
}
export const generateCodeChallenge = (verifier = generateRandomString()) => {
    const hashedVerifier = sha256(verifier);
    const base64Verifier = Base64.stringify(hashedVerifier);
    return {
        codeChallenge: base64Verifier
            .replace(/=/g, '')
            .replace(/\+/g, '-')
            .replace(/\//g, '_'),
        codeVerifier: verifier
    };
}

export const generateRandomString = (length = 43) => {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
    let randomString = '';
    for (let i = 0; i < 43; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        randomString += charset[randomIndex];
    }
    return randomString;
};


export const getFetchAccessTokenFromCodeApi = (issuer) => `"http://localhost:3010/get-token/${issuer}`;
