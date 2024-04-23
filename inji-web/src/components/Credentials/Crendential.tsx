import React from "react";
import {useNavigate} from "react-router-dom";
import {CredentialObject} from "./CredentialList";
import {getObjectForCurrentLanguage} from "../../utils/i18n";
import {ItemBox} from "../Common/ItemBox";
import {
    generateCodeChallenge,
    generateRandomString,
    getCurrentIssuerConfiguration,
    getESignetRedirectURL
} from "../../utils/issuerUtils";
import {addNewSession} from "../../utils/sessionUtils";

export const Credential: React.FC<CredentialProps> = (props) => {
    const navigate = useNavigate();
    const currentIssuer = getCurrentIssuerConfiguration();
    const credentialObject = getObjectForCurrentLanguage(props.credential.display)
    return <ItemBox index={props.index}
                    url={credentialObject.logo.url}
                    title={credentialObject.name}
                    description={credentialObject.name}
                    onClick={() => {
                        const state = generateRandomString();
                        const code_challenge = generateCodeChallenge(state);
                        window.open(getESignetRedirectURL(currentIssuer, state, code_challenge), '_self');
                        addNewSession({
                            certificateId: credentialObject.name,
                            codeVerifier: state,
                            state: state,
                            clientId: currentIssuer.client_id
                        });
                    }}
    />
}

type CredentialProps = {
    credential: CredentialObject;
    index: number;
}
