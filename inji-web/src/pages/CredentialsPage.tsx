import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {RequestMethodType, useFetch} from "../hooks/useFetch";
import {NavBar} from "../components/Common/NavBar";
import {CredentialList, CredentialObject} from "../components/Credentials/CredentialList";
import {storage} from "../utils/storage";

export const CredentialsPage: React.FC = () => {

    const [credentials, setCredentials] = useState<CredentialObject[]>([]);
    const {state, response, error, fetchRequest} = useFetch();
    const params = useParams();

    useEffect(() => {
        const fetchCall = async () => {
            let response = await fetchRequest(`/issuers/${params.credential_issuer}`, RequestMethodType.GET, null);
            storage.setItem(storage.SELECTED_ISSUER, response?.response);

            response = await fetchRequest(`/issuers/${params.credential_issuer}/credentialTypes`, RequestMethodType.GET, null);
            storage.setItem(storage.CREDENTIALS_SUPPORTED, response?.response?.supportedCredentials);

            setCredentials(response?.response?.supportedCredentials)
        }
        fetchCall();
    }, [])


    return <React.Fragment>
        <div className="bg-white min-h-screen">
            <NavBar setCredentials={setCredentials} search={true}/>
            <div className={"font-bold text-xl  mt-8 flex mx-28"}>List of credentials</div>
            <CredentialList credentials={credentials}/>
        </div>
    </React.Fragment>
}
