import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import styles from '../Buttons/ButtonA.module.css';

type ButtonProps = {
    color?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    width: string | number;
    height: string | number;
    variant: 'text' | 'outlined' | 'contained';
    background?: string;
    border?: string;
    disable?: boolean;
    shadow?: 'inner' | 'outher10' | 'outher20' | 'outher40';
    opacity?: string;
    path?: string;
}

export const ButtonA: React.FC<ButtonProps> = ({ color, size, label, width, height, variant, background, border, disable = false, shadow, path }) => {
    const shadowClass = shadow ? styles[shadow] : '';
    const buttonProps = path
        ? { component: 'a', href: path }
        : {};
    return (
        <Stack spacing={2} direction="row">
            <Button
                sx={{ width, height, color, borderRadius: border, backgroundColor: background }}
                variant={variant}
                size={size as any}
                disabled={disable}
                className={shadowClass}
                {...buttonProps}
            >
                {label}
            </Button>
        </Stack>
    )
}

export default ButtonA