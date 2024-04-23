import React from "react";
import {getObjectForCurrentLanguage} from "../../utils/i18n";
import {IssuerObject} from "../../pages/HomePage";
import {useNavigate} from "react-router-dom";
import {ItemBox} from "../Common/ItemBox";

export const Issuer: React.FC<IssuerObject> = ({issuer, index}) => {
    const issuerDisplayObject = getObjectForCurrentLanguage(issuer.display);
    const navigate = useNavigate();
    return <React.Fragment>
        <ItemBox index={index}
                 url={issuerDisplayObject?.logo.url}
                 title={issuerDisplayObject?.title}
                 description={issuerDisplayObject?.description}
                 onClick={() => navigate(`/issuers/${issuer.credential_issuer}`)}/>
    </React.Fragment>
}

