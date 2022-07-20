import { Box, Stack } from '@mui/material';
import React from 'react';
import { CustomSubHeader, CustomTypography } from '../../../components/CustomTypography';
import OrderNumber from './OrderNumber';

type Props = {
  number: string
  title: string
  text: string
  hideText?: boolean
}

const StepDescription: React.FC<Props> = ({ number, title, text, hideText = false }) => {
  return (
    <Stack direction={'row'} mx={'1rem'}>
      <OrderNumber number={number} />
      <Box>
        <CustomSubHeader>{title}</CustomSubHeader>
        {!hideText &&
          <CustomTypography>{text}</CustomTypography>
        }
      </Box>
    </Stack>
  )
}

export default StepDescription