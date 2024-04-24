import React from "react";
import {EmptyListContainerProps} from "../../types/components";

export const EmptyListContainer: React.FC<EmptyListContainerProps> = ({content}) => {
    return <React.Fragment>
        <div className="flex justify-center items-center w-full mx-auto flex-col">
            <div className="container mx-auto mt-8 px-4 flex-1 flex flex-col">
                <p className="text-center">{content}</p>
            </div>
        </div>
    </React.Fragment>
}
