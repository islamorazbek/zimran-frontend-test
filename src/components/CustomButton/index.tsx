import { Button } from '@mui/material';
import React from 'react';

type Props = {
  title: string
  handleClick?: (args?: any) => void
}

const CustomButton: React.FC<Props> = ({ title, handleClick }) => {
  return (
    <Button
      onClick={handleClick}
      sx={{
        bgcolor: '#00AEFF',
        border: '1px solid #448EF6',
        borderRadius: '10px',
        width: '288px',
        color: '#FFFFFF',
        fontSize: '20px',
        fontWeight: '700',
        fontStyle: 'normal',
        my: '1rem',
        '&:hover': {
          color: '#00AEFF',
          bgcolor: '#FFFFFF'
        },
        textTransform: 'none'
      }}
    >
      {title}
    </Button>
  )
}

export default CustomButton