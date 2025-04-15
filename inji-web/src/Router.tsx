import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {Footer} from "./components/PageTemplate/Footer";
import {useSelector} from "react-redux";
import {RootState} from "./types/redux";
import {getDirCurrentLanguage} from "./utils/i18n";
import {PageNotFound} from "./pages/PageNotFound";
import {WelcomePage} from "./pages/WelcomePage";
import {UserPage} from "./pages/UserPage";
import {DownloadingPage} from "./pages/DownloadingPage";

export const AppRouter = () => {
    const language = useSelector((state: RootState) => state.common.language);
    const wrapElement = (element: JSX.Element, isBGNeeded: boolean = true) => {
        return <React.Fragment>
            <div className={!isBGNeeded ? `h-screen min-h-72 bg-iw-background font-base` : `h-screen min-h-72 bg bg-iw-background font-base` } dir={getDirCurrentLanguage(language)}>
                <div className={"top-20 h-full mt-20 my-auto flex-grow"}>
                    {element}
                </div>
                <Footer/>
            </div>
        </React.Fragment>
    }

    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={wrapElement(<WelcomePage/>, false)}/>
            <Route path="/user" element={wrapElement(<UserPage/>, false)}/>
            <Route path="/download" element={wrapElement(<DownloadingPage/>, false)}/>
            <Route path="/*" element={wrapElement(<PageNotFound/>)}/>
        </Routes>
    </BrowserRouter>)
}


