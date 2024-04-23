import React from "react";
import {IssuerObject} from "../../pages/HomePage";
import {RequestMethodType, useFetch} from "../../hooks/useFetch";
import "../../styles/issuers.css"
import {useTranslation} from "react-i18next";
import {FaSearch} from 'react-icons/fa';

export const SearchIssuer: React.FC<SearchIssuerProps> = (props) => {

    const {state, response, error, fetchRequest} = useFetch();
    const {t} = useTranslation("HomePage");
    const filterIssuers = async (searchText: string) => {
        const response = await fetchRequest(`/issuers?search=${searchText}`, RequestMethodType.GET, null);
        props.setIssuers(response.response.issuers);
    }

    return <React.Fragment>
        <div className="search-issuer-container">
            <div className="search-issuer-inner-container">
                <FaSearch className="search-bar-icon" size={20}/>
                <input
                    type="text"
                    placeholder={t("Intro.searchText")}
                    onChange={event => filterIssuers(event.target.value)}
                    className="search-issuer-input" // Adjusted padding to accommodate the icon
                />
            </div>
        </div>
    </React.Fragment>
}

type SearchIssuerProps = {
    setIssuers: React.Dispatch<React.SetStateAction<IssuerObject[]>>;
}
