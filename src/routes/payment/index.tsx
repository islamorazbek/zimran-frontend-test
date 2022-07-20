import { Box, Button, Container, Hidden, List, ListItem, ListItemIcon, ListItemText, Stack, SvgIcon, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import CustomButton from '../../components/CustomButton';
import { CustomPageHeader, CustomSubHeader, CustomTypography } from '../../components/CustomTypography';
import Footer from '../../components/Footer';
import OfferDescription from './components/OfferDescription';
import OrderNumber from './components/OrderNumber';
import ReadingPlan from './components/ReadingPlan';
import SpecialOffer from './components/SpecialOffer';
import StepDescription from './components/StepDescription';

const Payment = () => {
  const [price, setPrice] = React.useState(20);
  const isTabletScreen = useMediaQuery('(max-width:800px)');

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomPageHeader>What you get</CustomPageHeader>
      <Stack direction={isTabletScreen ? 'column' : 'row'} justifyContent={isTabletScreen ? 'center' : 'space-between'} mt={'1rem'} mb={'2rem'}>
        <StepDescription
          number={'1'}
          title={'Chat with your coach'}
          text={'Get all answers and avoid mistakes using 24/7 chat with your personal coach.'}
          hideText={isTabletScreen}
        />
        <img src="/images/payment-1.svg" alt="home-1" width="197px" style={{ margin: 'auto', marginTop: '1rem' }} />
      </Stack>
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} mt={'1rem'}>
        <Hidden mdDown>
          <ReadingPlan />
        </Hidden>
        <StepDescription
          number={'2'}
          title={'Easy readings'}
          text={'Your plan will include only those summaries that target your investment goals.'}
        />
      </Box>
      <Stack direction={isTabletScreen ? 'column' : 'row'} justifyContent={isTabletScreen ? 'center' : 'space-between'} mt={'3rem'}>
        <StepDescription
          number={'3'}
          title={'Investment strategies of the best'}
          text={'We carefully pick the key investment rules from the best in their field and compile them in simple-to-follow summaries.'}
        />
        <Stack direction={'column'}>
          <img src={'/images/graph/graph-1.svg'} style={{ width: '100%', maxWidth: '400', margin: 'auto', objectFit: 'contain' }} />
          <Hidden mdDown>
            <img src={'/images/graph/graph-2.svg'} style={{ width: '100%', objectFit: 'contain' }} />
          </Hidden>
        </Stack>
      </Stack>
      <Hidden smDown>
        <OfferDescription />
      </Hidden>
      <SpecialOffer />
      <Box textAlign={'center'}>
        <CustomButton title='Start my trial' handleClick={() => alert('test')} />
      </Box>
      <Footer />
    </Box>
  )
}

export default Payment