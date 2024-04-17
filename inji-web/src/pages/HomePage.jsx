import React, {useEffect, useState} from 'react';
import PageTemplate from './PageTemplate';
import IssuersList from '../components/Issuers/IssuerList';
import SearchIssuers from '../components/Issuers/SearchIssuers';
import _axios from 'axios';
import {FETCH_ISSUERS_URL} from '../utils/config';
import LoadingScreen from '../components/Common/LoadingScreen';
import {removeUinAndESignetIssuers} from '../utils/misc';
import {toast} from 'react-toastify';

export default function Home(props) {
    const [issuersList, setIssuersList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    // logic to fetch the list of IssuerPage on page load
    useEffect(() => {
        _axios
            .get(FETCH_ISSUERS_URL)
            .then(response => {
                if (response?.data?.response?.issuers) {
                    setIssuersList(
                        response?.data?.response?.issuers?.filter(issuer =>
                            removeUinAndESignetIssuers(issuer.display[0].title),
                        ),
                    );
                }
                setLoading(false);
            })
            .catch(error => {
                toast.error('No issuers found. Please try again later.', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    progress: undefined,
                    theme: 'colored',
                });
                console.error('Error fetching issuers:', error.message);
                setLoading(false);
                setErrorMessage(error.message);
            });
    }, []);

    // TODO: show a loader while loading and error message in case of any errors
    return (
        <PageTemplate>
            <SearchIssuers/>
            {loading ? (
                <LoadingScreen/>
            ) : (
                <IssuersList issuersList={issuersList}/>
            )}
        </PageTemplate>
    );
}
