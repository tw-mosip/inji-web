import React from "react";
import {useNavigate} from "react-router-dom";
import {BsShieldFillCheck, BsShieldFillX} from "react-icons/bs";
import {DownloadResultProps} from "../../types/components";


export const DownloadResult: React.FC<DownloadResultProps> = (props) => {
    const navigate = useNavigate();
    return <React.Fragment>
        <div className="flex flex-col justify-center items-center pt-32">
            <div className="rounded-full p-2 shadow">
                {props.success ?
                    <div className="rounded-full p-8 bg-green-50 "><BsShieldFillCheck size={40} color={"green"}/>
                    </div> :
                    <div className="rounded-full p-8 bg-red-50 "><BsShieldFillX size={40} color={"red"}/></div>}
            </div>
            <div className="mt-4 ">
                <p className="font-bold">{props.title}</p>
            </div>
            <div className="mb-6">
                <p>{props.subTitle}</p>
            </div>
            <div>
                <button
                    onClick={() => navigate("/")}
                    className="text-orange-500 font-bold py-2 px-4 rounded-lg border-2 border-orange-500">
                    Go to Home
                </button>
            </div>
        </div>
    </React.Fragment>
}

