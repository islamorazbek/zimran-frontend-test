import { Container, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography>Guaranteed <b>Safe</b> Checkout</Typography>
      <img src='/images/security.png' alt='security' width={'100%'} />
      <Typography textAlign={'center'} fontSize={'12px'} color={'rgba(0, 0, 0, 0.5)'}>
        By continuing I agree with Terms of Service, Privacy Policy, Money-Back Policy, Subscription terms, Cookie policy
      </Typography>
    </Container>
  )
}

export default Footer