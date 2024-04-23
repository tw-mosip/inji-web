import React from "react";
import {IssuerObject} from "../../pages/HomePage";
import {useNavigate} from "react-router-dom";
import {Issuer} from "./Issuer";
import '../../styles/issuers.css';

export const IssuersList: React.FC<IssuersListProps> = ({issuers}) => {
    const navigate = useNavigate();

    if (issuers?.length === 0) {
        return <div className="issuers-empty-list-outer-container">

            <div className="issuer-list-container">
                <p className="issuers-empty-list-text">No issuers found. Please refresh your browser window or try again
                    later</p>
            </div>
        </div>
    }

    return <React.Fragment>
        <div className="issuer-list-container">
            <div className="issuer-list-inner-container">
                {
                    issuers.map((issuer, index) => {
                        return <Issuer issuer={issuer} index={index}/>
                    })
                }
            </div>
        </div>
    </React.Fragment>
}

type IssuersListProps = {
    issuers: IssuerObject[];
}
