import React from "react";
import {switchLanguage} from "../../utils/i18n";
import {VscGlobe} from "react-icons/vsc";

export const LanguageSelector: React.FC = () => {
    return <React.Fragment>
        <div
            className="relative flex flex-row items-center font-bold bg-white rounded leading-tight">
            <VscGlobe size={30} color={"orange"}/>
            <select
                id="language"
                onChange={(event) => switchLanguage(event.target.value)}>
                onClick={(event) => event.preventDefault()}
                <option value={"en"}>English</option>
                <option value={"ta"}>தமிழ்</option>
            </select>
        </div>
    </React.Fragment>
}
