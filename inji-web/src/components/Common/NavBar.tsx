import React from "react";
import {RequestMethodType, useFetch} from "../../hooks/useFetch";
import {useNavigate, useParams} from "react-router-dom";
import {CredentialObject} from "../Credentials/CredentialList";
import {useTranslation} from "react-i18next";
import {IoArrowBack} from "react-icons/io5";
import {FaSearch} from "react-icons/fa";

export const NavBar: React.FC<NavBarProps> = (props) => {


    const {state, response, error, fetchRequest} = useFetch();
    const params = useParams();
    const navigate = useNavigate();
    const {t} = useTranslation("CredentialsPage");
    
    const filterCredential = async (searchText: string) => {
        const response = await fetchRequest(`/issuers/${params.credential_issuer}/credentialTypes?search=${searchText}`, RequestMethodType.GET, null);
        props.setCredentials(response.response.supportedCredentials);
    }

    return <React.Fragment>
        <div className="bg-blue-100 text-black p-4 py-10">
            <nav className="flex justify-between mx-auto container items-center px-4">
                <div className="flex items-center">
                    <IoArrowBack size={24} onClick={() => navigate("/")}/>
                    <span className="text-2xl font-semibold pl-2">Title</span>
                </div>

                {props.search &&
                    <div className="flex py-1 items-center">
                        <div className="relative w-96 mx-auto flex justify-center items-center">
                            <FaSearch className="search-bar-icon" size={20}/>
                            <input
                                type="text"
                                placeholder={t("searchText")}
                                onChange={event => filterCredential(event.target.value)}
                                className="search-issuer-input" // Adjusted padding to accommodate the icon
                            />
                        </div>
                    </div>
                }
            </nav>
        </div>
    </React.Fragment>
}

export type NavBarProps = {
    setCredentials: React.Dispatch<React.SetStateAction<CredentialObject[]>>;
    search: boolean;
}
