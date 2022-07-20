import { Box } from '@mui/material'
import React from 'react'

type Props = {
  number?: string
}

const OrderNumber: React.FC<Props> = ({ number }) => {
  return (
    <Box
      width={'38px'}
      height={'38px'}
      borderRadius={'50%'}
      bgcolor={'#5EB1A8'}
      color={'#FFFFFF'}
      fontSize={'28px'}
      textAlign={'center'}
      mr={'1rem'}
    >
      {number}
    </Box>
  )
}

export default OrderNumber

type RoundIconProps = {
  number?: string,
  background?: string
}

export const RoundIcon: React.FC<RoundIconProps> = ({ background = '#5EB1A8', number }) => {
  return (
    <Box
      width={'38px'}
      height={'38px'}
      borderRadius={'50%'}
      color={'#FFFFFF'}
      fontSize={'28px'}
      textAlign={'center'}
      mr={'1rem'}
      sx={{
        background: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '38px 38px'
      }}
    >
      {number}
    </Box>
  )
}