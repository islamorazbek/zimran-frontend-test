import { Typography } from '@mui/material';
import React from 'react';

type Props = {
  children: React.ReactNode
}

export const CustomPageHeader: React.FC<Props> = ({ children }) => {
  return (
    <Typography variant='h1' sx={{ fontSize: '32px', fontWeight: '700', my: '2rem' }}>
      {children}
    </Typography>
  )
}

export const CustomSubHeader: React.FC<Props> = ({ children }) => {
  return (
    <Typography variant='h2' sx={{ fontSize: '24px', fontWeight: '700' }}>
      {children}
    </Typography>
  )
}

export const CustomTypography: React.FC<Props> = ({ children }) => {
  return (
    <Typography sx={{ fontSize: '18px', fontWeight: '400', mt: '1rem', width: '320px', fontStyle: 'normal' }}>
      {children}
    </Typography>
  )
}
