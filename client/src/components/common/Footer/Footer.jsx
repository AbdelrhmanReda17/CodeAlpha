import { Typography , Link, Divider } from '@mui/joy'
import { Box, Container , Grid } from '@mui/material'
import React from 'react'
import styles from './Footer.module.css'
const Footer = () => {
  return (
    <div style={{backgroundColor: "#131313"}}>
        <Container maxWidth="xl" sx={{ maxWidth: "1600px !important" , paddingTop: 1 }}>
            <Grid padding={10} container wrap="wrap" justifyContent={'center'} alignItems={'center'}>
                    <Grid item xs={4} container gap={2} justifyContent={'center'} alignItems={'center'}  textAlign={'center'} flexDirection={'column'}>
                         <Typography fontSize='20px'  sx={{color:'white'}} > About </Typography>
                         <Link className={`${styles.letter}`} fontSize='14px' underline="none"  color="neutral" sx={{color:'#C2C5DB'}} > Our Story </Link>
                         <Link className={`${styles.letter}`} fontSize='14px' underline="none" color="neutral" sx={{color:'#C2C5DB'}} > Mission </Link>
                         <Link className={`${styles.letter}`}fontSize='14px' underline="none" color="neutral" sx={{color:'#C2C5DB'}} > About Us </Link>
                         <Link className={`${styles.letter}`} fontSize='14px' underline="none" color="neutral" sx={{color:'#C2C5DB'}} > News </Link>
                    </Grid>
                    <Grid item xs={4}  container gap={2} justifyContent={'center'} alignItems={'center'}  textAlign={'center'} flexDirection={'column'}>
                         <Typography fontSize='20px'  sx={{color:'white'}} > Categories </Typography>
                         <Link className={`${styles.letter}`}  underline="none"  fontSize='14px'  color="neutral" sx={{color:'#C2C5DB'}} > Work </Link>
                         <Link className={`${styles.letter}`} underline="none" fontSize='14px'  color="neutral" sx={{color:'#C2C5DB'}} > Services </Link>
                         <Link className={`${styles.letter}`} fontSize='14px' underline="none" color="neutral" sx={{color:'#C2C5DB'}} > Products </Link>
                         <Link className={`${styles.letter}`} fontSize='14px' underline="none" color="neutral" sx={{color:'#C2C5DB'}} > Tips & Tricks </Link>
                    </Grid>
                    <Grid item xs={4} container  gap={2}justifyContent={'center'} alignItems={'center'} textAlign={'center'} flexDirection={'column'}> 
                      <Typography fontSize='20px'  sx={{color:'white'}} > Quick Links </Typography>
                      <Link className={`${styles.letter}`} fontSize='14px' underline="none" color="neutral" sx={{color:'#C2C5DB'}} > Privacy Policy </Link>
                      <Link className={`${styles.letter}`} fontSize='14px' underline="none" color="neutral" sx={{color:'#C2C5DB'}} > Privacy Statement </Link>
                      <Link className={`${styles.letter}`} fontSize='14px' underline="none" color="neutral" sx={{color:'#C2C5DB'}} > Use of cookies </Link>
                      <Link className={`${styles.letter}`} fontSize='14px' underline="none" color="neutral" sx={{color:'#C2C5DB'}} > International Editions </Link>
                    </Grid>
            </Grid>
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 1 }}>
              <Typography sx={{color: `#C2C5DB` , padding:"20px 0px 20px"}} level='title-lg'> Copyright © 2023 All rights reserved </Typography>
            </Box>
        </Container>
    </div>
  )
}

export default Footer