export type DisplayArrayObject = {
    name: string;
    language: string;
    locale: string;
    logo: LogoObject,
    title: string;
    description: string;
}
type LogoObject = {
    url: string;
    alt_text: string;
}
export type CredentialWellknownObject = {
    format: string;
    "id": string;
    "scope": string;
    "display": DisplayArrayObject[],
    "proof_types_supported": string[],
    "credential_definition": {
        "type": string[],
        "credentialSubject": {
            "fullName": {
                "display": DisplayArrayObject[]
            }
        }
    }
}
export type CodeChallengeObject = {
    codeChallenge: string;
    codeVerifier: string;
}
export type IssuerObject = {
    name: string;
    desc: string;
    credential_issuer: string,
    authorization_endpoint: string;
    credentials_endpoint: string;
    display: DisplayArrayObject[];
    client_id: string;
    scopes_supported: string[];
}
export type ResponseTypeObject = {
    id?: string;
    version?: string;
    str?: string;
    responsetime?: string;
    metadata?: string;
    response?: any;
    errors?: [];

    access_token?: string;
    expires_in?: number;
    token_type?: string;
}

export type SessionObject = {
    issuerId?: string;
    issuerDisplayName?: string;
    certificateId: string;
    codeVerifier: string;
    state: string;
    clientId: string;
}
