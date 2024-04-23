import React from "react";
import {useTranslation} from "react-i18next";

export const Footer: React.FC = () => {

    const {t} = useTranslation("PageTemplate")

    return <footer
        className="bg-grey py-4 text-center shadow-sm border drop-shadow-xl border-t-blue-10 flex">
        <div className="container mx-auto">
            <p className="text-black">{t("Footer.copyRight")}</p>
        </div>
    </footer>;
}
