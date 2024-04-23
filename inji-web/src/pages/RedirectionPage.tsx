import React from 'react';
import {getActiveSession} from "../utils/sessionUtils";
import {useLocation} from "react-router-dom";
import {NavBar} from "../components/Common/NavBar";

export const RedirectionPage: React.FC = () => {

    const fetchAccessToken = async (issuer, code, clientId, codeVerifier) => {
        const requestBody = new URLSearchParams({
            'grant_type': 'authorization_code',
            'code': code,
            'client_id': clientId,
            'client_assertion_type': 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
            'client_assertion': '',
            'redirect_uri': "https://localhost:3001/redirect",
            'code_verifier': codeVerifier
        });

        // Construct the fetch options
        const options = {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: requestBody
        };
        try {
            // Make the fetch request
            const response = await fetch("http://localhost:3010/get-token/Sunbird", options);

            // Check if the request was successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Parse the JSON response
            const data = await response.json();

            // Return the data
            return data;
        } catch (error) {
            console.error('Error fetching access token:', error);
            throw error;
        }
    };

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const currentSession = getActiveSession(searchParams.get("state"));
    fetchAccessToken("Sunbird", currentSession.code, currentSession.client_id, currentSession.codeVerifier).then(response => {
        console.log("Response => ", response);
    })
    console.log("currentSession => ", currentSession);
    return <React.Fragment>
        <NavBar setCredentials={() => {
        }} search={false}/>
        <div>{currentSession.state}</div>
    </React.Fragment>
}
