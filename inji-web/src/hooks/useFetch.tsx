import {useState} from "react";

export enum RequestStatus {
    LOADING,
    DONE,
    ERROR
}

export enum RequestMethodType {
    GET,
    POST,
    DELETE
}


export const useFetch = () => {
    const [state, setState] = useState<RequestStatus>(RequestStatus.LOADING);
    const [error, setError] = useState<string>("");
    const [response, setResponse] = useState<object>({});

    const fetchRequest = async (uri: string, method: RequestMethodType, body?: any) => {
        try {
            let responseJson = {};
            const response = await fetch(`http://localhost:3010${uri}`, {
                method: RequestMethodType[method],
                headers: {
                    "Content-Type": "application/json",
                },
                body: body && JSON.stringify(body),
            });

            if (response.ok) {
                responseJson = await response.json();
                setResponse(responseJson);
                setState(RequestStatus.DONE);
            }
            if (!response.ok) {
                setState(RequestStatus.ERROR);
            }
            return responseJson;
        } catch (e) {
            setState(RequestStatus.ERROR);
            setError("Error Happened");
        }
    };
    return {state, response, error, fetchRequest};
}
