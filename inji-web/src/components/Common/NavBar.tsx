import React from "react";
import {useFetch} from "../../hooks/useFetch";
import {useNavigate, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {IoArrowBack} from "react-icons/io5";
import {FaSearch} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {storeCredentials} from "../../redux/reducers/credentialsReducer";
import {api, MethodType} from "../../utils/api";
import {NavBarProps} from "../../types/components";
import {RootState} from "../../types/redux";

export const NavBar: React.FC<NavBarProps> = (props) => {


    const {fetchRequest} = useFetch();
    const params = useParams();
    const navigate = useNavigate();
    const {t} = useTranslation("CredentialsPage");
    const dispatch = useDispatch();
    const selectedIssuer = useSelector((state: RootState) => state.issuers);

    const filterCredential = async (searchText: string) => {
        const response = await fetchRequest(api.searchCredentialType(params.issuerId, searchText), MethodType.GET, null);
        dispatch(storeCredentials(response?.response?.supportedCredentials))
    }

    return <React.Fragment>
        <div className="bg-blue-100 text-black p-4 py-10">
            <nav className="flex justify-between mx-auto container items-center">
                <div className="flex items-center">
                    <IoArrowBack size={24} onClick={() => navigate("/")}/>
                    <span
                        className="text-2xl font-semibold pl-2">{selectedIssuer.selected_issuer.credential_issuer}</span>
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
