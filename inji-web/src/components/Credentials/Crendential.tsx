import React from "react";
import {getObjectForCurrentLanguage} from "../../utils/i18n";
import {ItemBox} from "../Common/ItemBox";
import {generateCodeChallenge, generateRandomString} from "../../utils/misc";
import {addNewSession} from "../../utils/sessions";
import {useSelector} from "react-redux";
import {api} from "../../utils/api";
import {CredentialProps} from "../../types/components";
import {CodeChallengeObject} from "../../types/data";
import {RootState} from "../../types/redux";

export const Credential: React.FC<CredentialProps> = (props) => {
    const selectedIssuer = useSelector((state: RootState) => state.issuers);
    const language = useSelector((state: RootState) => state.common.language);
    const credentialObject = getObjectForCurrentLanguage(props.credential.display, language);
    return <ItemBox index={props.index}
                    url={credentialObject.logo.url}
                    title={credentialObject.name}
                    description={credentialObject.name}
                    onClick={() => {
                        const state = generateRandomString();
                        const code_challenge: CodeChallengeObject = generateCodeChallenge(state);
                        window.open(api.authorization(selectedIssuer.selected_issuer, state, code_challenge), '_self', 'noopener');
                        addNewSession({
                            issuerId: selectedIssuer.selected_issuer.credential_issuer,
                            certificateId: props.credential.id,
                            codeVerifier: state,
                            state: state,
                            clientId: selectedIssuer.selected_issuer.client_id
                        });
                    }}
    />
}

