import { Box, Hidden, Paper, Stack, SvgIcon, Typography } from '@mui/material'
import React from 'react'
import OrderNumber, { RoundIcon } from './OrderNumber'
import { ReactComponent as Warren } from '../icons/warren.svg';
import { ReactComponent as Elon } from '../icons/elon.svg';
import { ReactComponent as Jeff } from '../icons/jeff.svg';
import { CustomSubHeader, CustomTypography } from '../../../components/CustomTypography';

const ReadingPlan = () => {
  return (
    <Paper sx={{ py: '2rem', px: '1rem' }} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '20px' }}>
      <Stack direction={'column'}>
        <Stack direction={'row'}>
          <SvgIcon component={Warren} inheritViewBox sx={{ fontSize: '36px', mx: '1rem' }} />
          <Stack direction={'column'}>
            <CustomSubHeader>Reading Day 1:</CustomSubHeader>
            <Typography sx={{fontSize: '18px', width: '310px'}}>
              <ul style={{ paddingLeft: '0.5rem' }}>
                <li>
                  Never depend on single income. Make investment to create a second source
                </li>
              </ul>
            </Typography>
          </Stack>
        </Stack>
        <Stack direction={'row'}>
          <SvgIcon component={Elon} inheritViewBox sx={{ fontSize: '36px', mx: '1rem' }} />
          <Stack direction={'column'}>
            <CustomSubHeader>Reading Day 2:</CustomSubHeader>
            <Typography sx={{fontSize: '18px', width: '310px'}}>
              <ul style={{ paddingLeft: '0.5rem' }}>
                <li>
                  Why Elon Musk invests in Utility Companies?
                </li>
              </ul>
            </Typography>
          </Stack>
        </Stack>
        <Stack direction={'row'}>
          <SvgIcon component={Jeff} inheritViewBox sx={{ fontSize: '36px', mx: '1rem' }} />
          <Stack direction={'column'}>
            <CustomSubHeader>Reading Day 3:</CustomSubHeader>
            <Typography sx={{fontSize: '18px', width: '310px'}}>
              <ul style={{ paddingLeft: '0.5rem' }}>
                <li>
                  Investments should have some element of risk
                </li>
                <li>
                  The early bird gets the worm
                </li>
              </ul>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      
    </Paper>
  )
}

export default ReadingPlan