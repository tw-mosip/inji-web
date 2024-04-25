import React from "react";
import {useTranslation} from "react-i18next";

export const IntroBox: React.FC = () => {
    const {t} = useTranslation("HomePage");
    return <React.Fragment>
        <div className="text-center mb-8 pt-20 pb-20">
            <h2 className="text-2xl font-bold">{t("Intro.title")}</h2>
            <p className="text-gray-600 mt-2">{t("Intro.subTitle")}</p>
        </div>
    </React.Fragment>
}
