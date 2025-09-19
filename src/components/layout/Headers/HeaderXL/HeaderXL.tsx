import { Container } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography';
import styles from './HeaderXL.module.css';

type HeaderXLProps = {
    title?: string;
    subtitle?: string;
    description?: string;
    height?: string;
    background?: string;
    color?: string;
}

const HeaderXL: React.FC<HeaderXLProps> = ({ title = "Wheat", subtitle = 'Subtitle', description = 'description', height='100vh', background='#fff', color="#000" }) => {
    return (
        <Container sx={{

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: height,
            backgroundColor: background,
            color: color,
        }}>
            <Typography variant='h1' fontWeight={900} gutterBottom className={styles['headerXL']}>
                {title}
            </Typography>
            <Typography className={styles['headerXL-lexend']}>
                {subtitle}
            </Typography>
            <Typography>
                {description}
            </Typography>
        </Container>
    )
}

export default HeaderXL