import React, {useEffect, useState} from "react";
import {RequestMethodType, useFetch} from "../hooks/useFetch";
import {IntroBox} from "../components/Common/IntroBox";
import {SearchIssuer} from "../components/Issuers/SearchIssuer";
import {IssuersList} from "../components/Issuers/IssuersList";
import {DisplayArrayObject} from "../utils/i18n";
import {storage} from "../utils/storage";

export const HomePage: React.FC = () => {

    const [issuers, setIssuers] = useState<IssuerObject[]>([]);
    const {state, response, error, fetchRequest} = useFetch();

    useEffect(() => {
        const fetchCall = async () => {
            const response = await fetchRequest("/issuers", RequestMethodType.GET, null);
            const issuers = response?.response?.issuers.filter(issuer => issuer.credential_issuer === "Sunbird")
            storage.setItem(storage.ISSUERS_LIST, issuers);
            setIssuers(issuers)
        }
        fetchCall();
    }, [])

    return <React.Fragment>
        <div className="container mx-auto mt-8 px-4 flex-1 flex flex-col">
            <IntroBox/>
            <SearchIssuer setIssuers={setIssuers}/>
        </div>
        <div className={"font-bold mt-8 text-xl flex mx-28"}>List of Issuers</div>
        <IssuersList issuers={issuers}/>
    </React.Fragment>

}

export type IssuerObject = {
    index: number;
    name: string;
    desc: string;
    credential_issuer: string,
    display: DisplayArrayObject[];
}
