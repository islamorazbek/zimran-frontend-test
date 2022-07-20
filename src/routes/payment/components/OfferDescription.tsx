import { Stack, SvgIcon, Typography } from '@mui/material';
import React from 'react';
import { CustomPageHeader, CustomSubHeader } from '../../../components/CustomTypography';
import { ReactComponent as CheckIcon } from '../icons/check.svg';

const OfferDescription = () => {
  return (
    <Stack direction={'column'}>
      <CustomPageHeader>Try Prosperi for 7 days, and you will:</CustomPageHeader>
      <Stack direction={'row'} alignItems={'center'}>
        <SvgIcon component={CheckIcon} inheritViewBox sx={{ fontSize: '24.5px' }} />
        <Typography fontSize={'20px'} mx={'1rem'} my={'0.5rem'}>Know key investment terms and rules </Typography>
      </Stack>
      <Stack direction={'row'} alignItems={'center'}>
        <SvgIcon component={CheckIcon} inheritViewBox sx={{ fontSize: '24.5px' }} />
        <Typography fontSize={'20px'} mx={'1rem'} my={'0.5rem'}>Become an investor and buy your first stocks / crypto </Typography>
      </Stack>
      <Stack direction={'row'} alignItems={'center'}>
        <SvgIcon component={CheckIcon} inheritViewBox sx={{ fontSize: '24.5px' }} />
        <Typography fontSize={'20px'} mx={'1rem'} my={'0.5rem'}>Start generating additional income </Typography>
      </Stack>
    </Stack>
  )
}

export default OfferDescription