import React from 'react';
import Grid from '@mui/material/Grid';
import styles from './GridA.module.css';

export type GridAProps = {
    columns?: number;
    columnSpacing?: number;
    container?: boolean;
    item?: boolean;
    offset?: number;
    rowSpacing?: number;
    size?: number;
    spacing?: number;
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    sx?: object;
    background?: string;
    border?: string;
    borderColor?: string;
    borderRadius?: number | string;
    justifyContent?: string;
    gap?: number | string;
    shadow?: 'inner' | 'outher10' | 'outher20' | 'outher40';
    children: React.ReactNode;
};

const GridA: React.FC<GridAProps> = ({ columns, columnSpacing, container = true, item, offset, rowSpacing, size, spacing, wrap, sx, background, border, borderColor, borderRadius, justifyContent, gap, shadow, children }) => (
    <Grid
        {...(container ? { container: true } : {})}
        {...(item ? { item: true } : {})}
        columns={columns}
        columnSpacing={columnSpacing}
        rowSpacing={rowSpacing}
        spacing={spacing}
        wrap={wrap}
        sx={{ background, border, borderColor, borderRadius, justifyContent, gap, ...sx }}
        className={shadow ? styles[shadow] : ''}
    >
        {children}
    </Grid>
);

export default GridA;
