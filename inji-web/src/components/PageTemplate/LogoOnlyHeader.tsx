import React from "react";
import {useNavigate} from "react-router-dom";
import { RootState } from "../../types/redux";
import { useSelector } from "react-redux";
import { isRTL } from "../../utils/i18n";
export const LogoOnlyHeader: React.FC = () => {
    const language = useSelector((state: RootState) => state.common.language);
    const navigate = useNavigate();

    return (
        <header>
        <div data-testid="Header-Container"
                className="fixed top-0 left-0 right-0 bg-iw-background py-7 z-10 shadow">
                <div className="container mx-32 flex justify-between items-center">
                    <div data-testid="Header-InjiWeb-Logo-Container" className={`flex flex-row ${isRTL(language) ? 'space-x-reverse' : 'space-x-9'} justify-center items-center`}>
                        <div role={"button"}
                            tabIndex={0}
                            onMouseDown={() => navigate("/")}
                            onKeyUp={() => navigate("/")}>
                            <img src={require("../../assets/logo.png")}
                                className={`h-13 w-96 cursor-pointer'}`}
                                data-testid="Header-InjiWeb-Logo"
                             alt="Inji Web Logo"/>
                    </div>
                </div>
            </div>
        </div>
        </header>
    )

}
