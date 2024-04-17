import {useState} from "react";

enum RequestState {
    Loading,
    Done,
    Error,
}

export const useFetch = () => {

    const [state, setState] = useState(RequestState.Loading);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async (uri, method, body) => {
        try {
            const response = await fetch(uri, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: body && JSON.stringify(body),
            });

            if (response.ok) {
                const responseJson = await response.json();
                setData(responseJson);
                setState(RequestState.Done);
            }
            if (!response.ok) {
                setState(RequestState.Error);
            }
        } catch (e) {
            setState(RequestState.Error);
            setError(e);
        }
        return {data: data}
    };

    return {state: state, data: data, error: error, fetchRequest: fetchData};
};
