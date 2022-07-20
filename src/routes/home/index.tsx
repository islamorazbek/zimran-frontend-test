import { Box, Button, Container, Hidden, List, ListItem, ListItemIcon, ListItemText, Stack, SvgIcon, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';
import { CustomPageHeader } from '../../components/CustomTypography';
import { ReactComponent as OkHandIcon } from './icons/ok-hand.svg';

const Home = () => {
  const [price, setPrice] = React.useState(20);

  return (
    <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
      <CustomPageHeader>Investing is easier than you think</CustomPageHeader>
      <Container maxWidth='sm' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', bgColor: '#F9F2E9', mt: '1rem', mb: '2rem' }}>
        <img src="/images/home-1.svg" alt="home-1" />
        <Box>
          <List>
            <ListItem>
              <ListItemIcon>
                <SvgIcon>
                  <OkHandIcon />
                </SvgIcon>
              </ListItemIcon>
              <ListItemText>
                You can start with {price}$
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SvgIcon>
                  <OkHandIcon />
                </SvgIcon>
              </ListItemIcon>
              <ListItemText>
                No need for a Finance degree
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SvgIcon>
                  <OkHandIcon />
                </SvgIcon>
              </ListItemIcon>
              <ListItemText>
                No need to be a market expert
              </ListItemText>
            </ListItem>
          </List>
        </Box>
        <Link to='/payment' style={{ textDecoration: 'none' }}>
          <CustomButton title='Start Investing now' />
        </Link>
      </Container>
      <Container maxWidth='md' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: '#FFFFFF' }}>
        <Hidden smUp>
          <Stack direction={'column'} sx={{ textAlign: 'center' }}>
            <img src="/images/home-3.svg" alt="home-3" width={'166px'} style={{ margin: 'auto' }} />
            <Typography variant='caption' sx={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: '300', fontStyle: 'italic', width: '288px', my: '2rem' }}>
              Our mission is to help millions of people around the globe to make more educated decisions on how to approach their investments.
            </Typography>
          </Stack>
        </Hidden>
        <Stack direction={'row'} width={'100%'} sx={{ justifyContent: 'space-between' }}>
          <Stack direction={'column'}>
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '32px', fontWeight: '700', textAlign: 'start', width: '288px' }}>
              Chat with a Personal mentor
            </Typography>
            <Typography variant='caption' sx={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: '300', textAlign: 'start', width: '288px' }}>
              Get 24/7 online chat access to your personal finance and investment mentor who will advise you on avoiding the most common mistakes people make
            </Typography>
            <Hidden smDown>
              <CustomButton title='Get advice' handleClick={() => alert('Get Advice')} />
            </Hidden>
          </Stack>
          <Hidden smDown>
            <img src="/images/home-2.svg" alt="home-2" width={'214px'} style={{ marginInline: '2rem' }} />
          </Hidden>
        </Stack>
        <Hidden smDown>
          <Stack direction={'column'} sx={{ textAlign: 'center' }}>
            <img src="/images/home-3.svg" alt="home-3" width={'166px'} style={{ margin: 'auto' }} />
            <Typography variant='caption' sx={{ fontFamily: 'Poppins', fontSize: '18px', fontWeight: '300', fontStyle: 'italic', width: '288px', my: '2rem' }}>
              Our mission is to help millions of people around the globe to make more educated decisions on how to approach their investments.
            </Typography>
          </Stack>
        </Hidden>
        <Hidden smUp>
          <img src="/images/home-2.svg" alt="home-2" width={'214px'} style={{ marginInline: '2rem' }} />
        </Hidden>
        <Hidden smUp>
          <CustomButton title='Get advice' handleClick={() => alert('Get Advice')} />
        </Hidden>
      </Container>
    </Box>
  )
}

export default Home