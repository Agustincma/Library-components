import React from 'react';
import Box from '@mui/material/Box';
import styles from './FlexA.module.css';

export type FlexAProps = {
    sx?: object;
    classes?: string;
    disableGutters?: boolean;
    fixed?: boolean;
    maxWidth?: string | number;
    background?: string;
    border?: string;
    borderColor?: string;
    borderRadius?: number | string;
    justifyContent?: string;
    gap?: number | string;
    shadow?: 'inner' | 'outher10' | 'outher20' | 'outher40';
    children: React.ReactNode;
};

const FlexA: React.FC<FlexAProps> = ({ sx, classes, disableGutters, fixed, maxWidth, background, border, borderColor, borderRadius, justifyContent, gap, shadow, children }) => (
    <Box
        sx={{ display: 'flex', width: maxWidth, background, border, borderColor, borderRadius, justifyContent, gap, ...sx }}
        className={`${classes ? classes + ' ' : ''}${shadow ? styles[shadow] : ''}`}
    >
        {children}
    </Box>
);

export default FlexA;
