import { Link , AspectRatio, Typography , Card,CardContent, Breadcrumbs } from '@mui/joy'
import { Box, Container , Skeleton, Avatar, Divider } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom';
import { getBlog } from '../../store/blogsActions';
import moment from 'moment';
import ArtAndOpinionBlogs from '../Home/ArtAndOpinionBlogs/ArtAndOpinionBlogs';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

function getImageSrc(imagePath) {
    if (imagePath && imagePath.startsWith("https://")) {
        return imagePath; 
    } else if (imagePath && imagePath.startsWith("..")) {
        return `/uploads/${imagePath.split("uploads\\")[1]}`;
    }
}

const Blog = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { blog , relatedBlogs } = useSelector((state) => state.blogsReducer);
  const  {isLoading} = useSelector((state) => state.appReducer);
  useEffect(()=>{
    dispatch(getBlog(id));
  },[dispatch , id])
  return (
    <Container maxWidth="xl" sx={{ maxWidth: "1600px !important" , paddingBottom: 4 }}>
    <Breadcrumbs size='lg' aria-label="breadcrumbs">
          <Link color="neutral" href="/">
            Home
          </Link>
          <Link color="neutral" href="/blogs/all">
            Blogs
          </Link>
          <Typography color="neutral">
            {blog.userId?.username}'s Blog
          </Typography>
      </Breadcrumbs>
        <Card  variant="elevation" display="flex" elevation={0} sx={{backgroundColor: "white" , padding: 0 , margin : 0}}>
            <Typography level='h1' sx={{marginBottom: "16px" , fontSize: "35px" , fontWeight: "bold" , marginTop: "16px"}}>{blog.title}</Typography>
            <AspectRatio ratio={'7/3'}>
                {isLoading || !blog ?
                        <Skeleton variant='rectangular' width="100%" height="100%" />
                    :                
                    <img src={getImageSrc(blog?.img)} alt="IMG" srcSet={getImageSrc(blog?.img)}  width="100%" height="80%" />
                }
            </AspectRatio>    
            <CardContent>
                <Box marginTop={2} marginBottom={2} display={'flex'} flexDirection={'row'} gap={2}>
                    <Avatar variant="circular" src={blog?.userId?.img} alt="ARTHUR" sx={{width: "50px", height: "50px"}} />
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} >
                        <Typography level='title-lg' >{blog?.userId?.username}</Typography>
                        <Typography level="title-md">{moment(blog.createdAt).fromNow()}</Typography>
                    </Box>
                </Box>
                <Typography sx={{ fontSize: "16px" , marginTop: "16px" , color: "#646464"}}>{blog.description}</Typography>
            </CardContent>            
        </Card>
        <Divider sx={{ height: 2, borderRadius: 10 , marginTop: 4, marginBottom: 4, backgroundColor: 'black' }} />
        <SectionHeader text={"Related Blogs"} />
        {
          relatedBlogs ?  <ArtAndOpinionBlogs loading={isLoading} Blogs={relatedBlogs}  color={'white'} /> : <h1 style={{textAlign : "center"}}> No Related Blogs</h1>
        }
    </Container>
  )
}

export default Blog