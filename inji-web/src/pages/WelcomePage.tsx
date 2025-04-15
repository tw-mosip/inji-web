import React from "react";
import {HomeFeatures} from "../components/Home/HomeFeatures";
import {Header} from "../components/PageTemplate/Header";

export const WelcomePage:React.FC = () => {

    return <div className={"pb-20 flex flex-col gap-y-4 "}>
        <Header showLogout={false}/>
        <HomeFeatures/>
    </div>
}
