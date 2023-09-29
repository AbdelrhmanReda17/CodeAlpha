import React, { useEffect } from 'react'
import {   AspectRatio, Button, Input , Typography } from '@mui/joy';
import { Card as CustomCard } from '../../components';
import { Box, Container , Divider, Grid } from '@mui/material';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import MailIcon from '@mui/icons-material/Mail';
import { useDispatch, useSelector } from 'react-redux';
import { getMainBlogs } from '../../store/blogsActions';
import TechAndHealthBlogs from './TechAndHealthBlogs/TechAndHealthBlogs'
import ArtAndOpinionBlogs from './ArtAndOpinionBlogs/ArtAndOpinionBlogs'

const Home = () => {
    const { isLoading } = useSelector((state) => state.appReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMainBlogs());
    },[dispatch])
    
    const {techBlogs , artBlogs , healthBlogs , opinionBlogs} = useSelector((state) => state.blogsReducer);

    return (
    <>
        <Container maxWidth="xl" sx={{ maxWidth: "1600px !important"}}>
            <TechAndHealthBlogs loading={isLoading} Blogs={techBlogs} color={'white'} />
            <Divider sx={{ height: 2, borderRadius: 10 , marginTop: 2, marginBottom: 2, backgroundColor: 'black' }} />
        </Container>
        <Container maxWidth="xl" sx={{ maxWidth: "1600px !important"}}>
            <SectionHeader text={"Art & Culture"} type='artsandculture'/>
            <ArtAndOpinionBlogs loading={isLoading} Blogs={artBlogs}  color={'white'} />
        </Container>
         <Box sx={{backgroundColor: "#131313" , marginTop: 2, marginBottom: 2 }}>
            <Container maxWidth="xl" sx={{ maxWidth: "1600px !important" , paddingTop: 1 , paddingBottom: 3 }}>
                <SectionHeader color={"white"} text={"Health & Wellness"} type='health' />
                <TechAndHealthBlogs loading={isLoading} Blogs={healthBlogs} color={'#131313'} />
            </Container>
        </Box>
        <Container maxWidth="xl" sx={{ maxWidth: "1600px !important" }}>
            <SectionHeader text={"Opinion"} type='opinion' />
             <ArtAndOpinionBlogs loading={isLoading}  Blogs={opinionBlogs} />
        </Container>
        <Container maxWidth="xl" sx={{ maxWidth: "1600px !important" , marginTop: 4 , marginBottom: 4}}>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <AspectRatio ratio='19/4' sx={{width: "872px"}}>
                        <img
                            src="./Ad2.webp"
                            srcSet="./Ad2.webp 2x"
                            loading="lazy"
                            alt=""
                        />
                    </AspectRatio>
            </Box>
        </Container>
        <Box sx={{backgroundColor: "#F3F3F3" , marginTop: 2 }}>
            <Container maxWidth="xl" sx={{ maxWidth: "1600px !important" , paddingTop: 1 }}>
            <Box display={'flex'} flexDirection={'column'}  sx={{color : "#131313" , }} justifyContent={'center'} alignItems={'center'} paddingTop={"40px"} paddingBottom={"70px"}>
                    <Typography color='inherit' level='h2' fontWeight={'bold'} fontSize={44} marginBottom={"10px"}>  Subscribe to the newsletter</Typography>
                    <Typography color='inherit' level='h2' fontWeight={'bold'} fontSize={20} marginBottom={"15px"}>  Get a weekly digest of our most important stories direct to your inbox.</Typography>
                    <Input type='email'  startDecorator={<MailIcon color="success" />} endDecorator={<Button color="success" sx={{marginRight: 1}}>Message</Button>} sx={{width:"50%" , height: "40px" , marginBottom: "15px"}}/> 
                    <Typography sx={{color:"#646464"}} level='h2' fontWeight={'bold'} fontSize={12}>  Place some disclaimer text here about how subscriber’s email, Privacy Policy and all that.</Typography>
            </Box>
            </Container>
        </Box>
    </>
  )
}

export default Home