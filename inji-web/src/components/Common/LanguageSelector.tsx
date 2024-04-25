import React, {useState} from "react";
import {VscGlobe} from "react-icons/vsc";
import {switchLanguage} from "../../utils/i18n";
import {useDispatch, useSelector} from "react-redux";
import {storeLanguage} from "../../redux/reducers/commonReducer";
import {RootState} from "../../types/redux";

export const LanguageSelector: React.FC = () => {
    const dispatch = useDispatch();
    let language = useSelector((state: RootState) => state.common.language);
    language = language ? language : 'en';
    const [currentLanguage, setCurrentLanguage] = useState(language);

    const handleChange = (language: string) => {
        switchLanguage(language);
        dispatch(storeLanguage(language));
    }

    return <React.Fragment>
        <div
            className="relative flex flex-row items-center font-bold bg-white rounded leading-tight">
            <VscGlobe size={30} color={"orange"}/>
            <select
                defaultValue={currentLanguage}
                id="language"
                onChange={(event) => handleChange(event.target.value)}>
                <option value={"en"}>English</option>
                <option value={"ta"}>தமிழ்</option>
            </select>
        </div>
    </React.Fragment>
}
