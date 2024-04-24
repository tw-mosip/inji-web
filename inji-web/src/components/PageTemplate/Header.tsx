import React from "react";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {LanguageSelector} from "../Common/LanguageSelector";

export const Header: React.FC = () => {

    const {t} = useTranslation("PageTemplate");
    const navigate = useNavigate();

    return (
        <header className="fixed top-0 left-0 right-0 bg-white py-4 shadow-sm">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div onClick={() => navigate("/")}>
                    <img src={require("../../assets/InjiWebLogo.png")}
                         className={"h-13 w-28"}
                         alt="Inji Web Logo"/>
                </div>
                <nav>
                    <ul className="flex space-x-4 items-center">
                        <li>
                            <div onClick={() => navigate("/help")}
                                 className="text-black font-bold">{t("Header.help")}</div>
                        </li>
                        <li><a href="https://docs.mosip.io/inji" target="_blank" rel="noreferrer"
                               className="text-black font-bold">{t("Header.aboutInji")}</a></li>
                        <li><LanguageSelector/></li>
                    </ul>
                </nav>
            </div>
        </header>
    )

}
