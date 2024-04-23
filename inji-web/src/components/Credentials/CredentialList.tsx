import React from "react";
import {Credential} from "./Crendential";
import {DisplayArrayObject} from "../../utils/i18n";

export const CredentialList: React.FC<CredentialListProps> = ({credentials}) => {
    return <React.Fragment>
        <div className="container mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {credentials.map((credential, index) => (
                    <Credential credential={credential} index={index}/>
                ))}
            </div>
        </div>
    </React.Fragment>
}

type CredentialListProps = {
    credentials: CredentialObject[];
}

export type CredentialObject = {
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
