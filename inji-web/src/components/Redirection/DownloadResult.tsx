import React from "react";
import {useNavigate} from "react-router-dom";
import {BsShieldFillCheck, BsShieldFillExclamation, BsShieldFillX} from "react-icons/bs";
import {DownloadResultProps} from "../../types/components";
import {RequestStatus} from "../../hooks/useFetch";


export const DownloadResult: React.FC<DownloadResultProps> = (props) => {
    const navigate = useNavigate();
    return <React.Fragment>
        <div data-testid="DownloadResult-Outer-Container" className="flex flex-col justify-center items-center pt-32">
            <div className="rounded-full p-2 shadow">
                {props.state === RequestStatus.DONE &&
                    <div className="rounded-full p-8 bg-iw-shieldSuccessShadow ">
                        <BsShieldFillCheck
                            data-testid="DownloadResult-Success-SheildIcon" size={40} color={'var(--iw-color-shieldSuccessIcon)'}/></div>}
                {props.state === RequestStatus.ERROR &&
                    <div className="rounded-full p-8 bg-iw-shieldErrorShadow">
                        <BsShieldFillX
                            data-testid="DownloadResult-Error-SheildIcon" size={40} color={'var(--iw-color-shieldErrorIcon)'}/></div>}
                {props.state === RequestStatus.LOADING &&
                    <div className="rounded-full p-8 bg-iw-shieldLoadingShadow">
                        <BsShieldFillExclamation
                            data-testid="DownloadResult-Loading-SheildIcon" size={40} color={ 'var(--iw-color-shieldLoadingIcon)'}/></div>}
            </div>
            <div className="mt-4 ">
                <p className="font-bold" data-testid="DownloadResult-Title">{props.title}</p>
            </div>
            <div className="mb-6" data-testid="DownloadResult-SubTitle">
                <p>{props.subTitle}</p>
            </div>
            <div>
                <button
                    data-testid="DownloadResult-Home-Button"
                    onClick={() => navigate("/")}
                    className="text-iw-primary font-bold py-2 px-4 rounded-lg border-2 border-iw-primary">
                    Go to Home
                </button>
            </div>
        </div>
    </React.Fragment>
}

