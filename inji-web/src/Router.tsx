import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {HomePage} from "./pages/HomePage";
import {Header} from "./components/PageTemplate/Header";
import {Footer} from "./components/PageTemplate/Footer";
import {HelpPage} from "./pages/HelpPage";
import {CredentialsPage} from "./pages/CredentialsPage";
import {RedirectionPage} from "./pages/RedirectionPage";
import {useSelector} from "react-redux";
import {RootState} from "./types/redux";

export const AppRouter = () => {

    const theme = useSelector((state: RootState) => state.common.theme);
    const wrapElement = (element: JSX.Element) => {
        return <React.Fragment>
            <div className={`flex flex-col min-h-screen bg bg-iw-background font-base`}>
                <Header/>
                <div className={"top-20 left-0 right-0 h-5/6 mt-20 flex-grow"}>
                    {element}
                </div>
                <Footer/>
            </div>
        </React.Fragment>
    }

    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={wrapElement(<HomePage/>)}/>
            <Route path="/issuers/:issuerId" element={wrapElement(<CredentialsPage/>)}/>
            <Route path="/help" element={wrapElement(<HelpPage/>)}/>
            <Route path="/redirect" element={wrapElement(<RedirectionPage/>)}/>
        </Routes>
    </BrowserRouter>)
}


