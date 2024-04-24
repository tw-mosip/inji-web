import React from "react";
import {HelpAccordionItemProps} from "../../types/components";

export const HelpAccordionItem: React.FC<HelpAccordionItemProps> = (props) => {

    return <React.Fragment>
        <div className="border rounded-md mb-2">
            <button
                className="w-full p-4 text-left bg-gray-200 hover:bg-gray-300 focus:outline-none"
                onClick={() => props.setOpen(props.id)}
            >
                {props.title}
            </button>
            {(props.id === props.open) && (
                <div className="p-4 bg-white">
                    {props.content.map(content => <p>{content}</p>)}

                </div>
            )}
        </div>
    </React.Fragment>
}

