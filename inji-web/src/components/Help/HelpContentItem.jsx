import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccordionDetails from '@mui/material/AccordionDetails';
import {HorizontalLine} from '../Common/HorizontalLine';
import {TextWrapper} from '../Common/Text/TextWrapper';

export const HelpContentItem = ({
                                    panelId,
                                    expanded,
                                    handleChange,
                                    panelHeading,
                                    panelContents,
                                }) => {
    return (
        <Accordion
            expanded={expanded === panelId}
            onChange={handleChange(panelId)}
            style={{width: '200%', marginBottom: '20px'}}>
            <AccordionSummary
                expandIcon={<ArrowDropDownIcon/>}
                aria-controls={`${panelId}-content`}
                id={`${panelId}-header`}>
                <TextWrapper style={{fontWeight: 'bold', padding: '5px'}}>
                    {panelHeading}
                    {expanded === panelId && <HorizontalLine/>}
                </TextWrapper>
            </AccordionSummary>
            <AccordionDetails>
                {panelContents.map(panelContent => (
                    <TextWrapper style={{padding: '5px'}}>
                        {panelContent}
                    </TextWrapper>
                ))}
            </AccordionDetails>
        </Accordion>
    );
};
