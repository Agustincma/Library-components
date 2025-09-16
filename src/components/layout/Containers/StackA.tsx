import React from 'react';
import Stack from '@mui/material/Stack';
import styles from './StackA.module.css';

export type StackAProps = {
  divider?: React.ReactNode;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  spacing?: number;
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

const StackA: React.FC<StackAProps> = ({ divider, direction = 'row', spacing = 2, sx, background, border, borderColor, borderRadius, justifyContent, gap, shadow, children }) => (
  <Stack
    divider={divider}
    direction={direction}
    spacing={spacing}
    sx={{ background, border, borderColor, borderRadius, justifyContent, gap, ...sx }}
    className={shadow ? styles[shadow] : ''}
  >
    {children}
  </Stack>
);

export default StackA;
