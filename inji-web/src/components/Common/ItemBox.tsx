import React from "react";

export const ItemBox: React.FC<ItemBoxProps> = (props) => {
    return <React.Fragment>
        <div key={props.index}
             className="bg-white shadow flex flex-row shadow-blue-100 p-4 rounded-md cursor-pointer items-center"
             onClick={props.onClick}>
            <img src={props.url} alt="Issuer Logo" className="w-30 h-10 justify-center rounded-full mr-4"/>
            <div className={"justify-center items-center"}>
                <h3 className="text-lg font-semibold">{props.title}</h3>
                {props.description && <p>{props.description}</p>}
            </div>
        </div>
    </React.Fragment>
}

type ItemBoxProps = {
    index: number;
    url: string;
    title: string;
    description?: string;
    onClick: () => {};
    link: string;
}
