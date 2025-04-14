import React from "react";
import {HomeFeatures} from "../components/Home/HomeFeatures";
import {LogoOnlyHeader} from "../components/PageTemplate/LogoOnlyHeader";

export const WelcomePage:React.FC = () => {

    return <div className={"pb-20 flex flex-col gap-y-4 "}>
        <LogoOnlyHeader/>
        <HomeFeatures/>
    </div>
}
