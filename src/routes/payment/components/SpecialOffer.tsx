import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, SvgIcon, Typography } from '@mui/material';
import React from 'react';
import { ReactComponent as StarIcon } from '../icons/star.svg';

const SpecialOffer = () => {
  return (
    <Card sx={{borderRadius: '10px', my: '2rem'}} elevation={2}>
      <CardHeader
        sx={{ bgcolor: '#F4A65A' }}
        title={'SPECIAL OFFER'}
        // avatar={
        //   <SvgIcon
        //     component={StarIcon} inheritViewBox sx={{ fontSize: '14px' }} />
        // }
        titleTypographyProps={{ variant: 'h6' }}
        style={{ color: '#FFFFFF', display: 'flex', textAlign: 'center', padding: 0 }}
      />
      <CardContent sx={{ px: '4rem' }}>
        <Typography sx={{ fontSize: '18px', fontWeight: '500' }}>
          7-day trial for $10
        </Typography>
        <Typography sx={{ fontSize: '14px', fontWeight: '400', fontStyle: 'italic', color: 'rgba(0, 0, 0, 0.5)' }}>
          $19.99 billed monthly after the 1st week
        </Typography>
      </CardContent>
    </Card >
  )
}

export default SpecialOffer