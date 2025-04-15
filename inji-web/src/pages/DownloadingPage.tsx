import React from "react";
import {Header} from "../components/PageTemplate/Header";
import {DownloadingCard} from "../components/Home/DownloadingCard";

export const DownloadingPage:React.FC = () => {

    return <div className={"pb-20 flex flex-col gap-y-4 h-[80%]"}>
        <Header showLogout={true}/>
        <div className="bg-[url('./assets/bg.svg')] bg-repeat h-full">
            <DownloadingCard/>
        </div>
    </div>
}