import React from "react";
import {HelpAccordionItemProps} from "../../types/components";

export const HelpAccordionItem: React.FC<HelpAccordionItemProps> = (props) => {

    return <React.Fragment>
        <div className="border rounded-md mb-2 shadow shadow-blue-100">
            <button
                className="w-full p-4 text-left font-bold hover:bg-gray-50 focus:outline-none"
                onClick={() => props.setOpen(props.id)}
            >
                {props.title}
            </button>
            {(props.id === props.open) && (
                <div className="p-4 bg-white border-t-2">
                    {props.content.map(content => <p>{content}</p>)}

                </div>
            )}
        </div>
    </React.Fragment>
}

