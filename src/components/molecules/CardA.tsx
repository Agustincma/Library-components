import { Card, CardContent, Box } from '@mui/material';
import React from 'react'
import Typography from '@mui/material/Typography';
import PinterestIcon from '@mui/icons-material/Pinterest';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

type CardAProps = {
  helperText?: string;
  title?: string;
  description?: string;
  background?: string;
  color?: string;
}

export const CardA: React.FC<CardAProps> = ({
  helperText = 'helper text',
  title = "title title",
  description = "description",
  background = "#ccc",
  color = '#000'
}) => {
  return (
    <Card sx={{
      maxWidth: 300,
      minHeight: 400,
      background,
      color,
      borderRadius: 10,
      boxShadow: 'none',
      margin: 2,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <CardContent sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        margin: 1,
        flexGrow: 1
      }}>
        <Typography variant='subtitle2' color={color} fontWeight={900} gutterBottom>
          {helperText}
        </Typography>
        <Typography variant='h3' color={color} fontWeight={900} gutterBottom>
          {title.split(' ').map((word, idx) => (
            <React.Fragment key={idx}>
              {word}
              <br />
            </React.Fragment>
          ))}
        </Typography>
      </CardContent>
      <Box sx={{
        height: '50px',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 2,
        pb: 3
      }}>
        <Typography sx={{ display: 'flex', alignItems: 'end', gap: 1, maxWidth: '200px' }} variant='body2' color={color} fontWeight={400}>
          {description}
        </Typography>
        <PinterestIcon fontSize='large' />
      </Box>
    </Card>
  )
}
export default CardA
