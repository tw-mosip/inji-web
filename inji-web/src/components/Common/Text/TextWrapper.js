import {Typography} from '@mui/material';
import React from 'react';

export const TextWrapper = ({variant, style, children}) => {
    return (
        <Typography
            variant={variant}
            style={{...style, font: 'normal normal 600 Inter'}}>
            {children}
        </Typography>
    );
};
