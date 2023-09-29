import React from 'react'
import {  Divider , Skeleton  } from '@mui/material';
import {  Typography , CardContent , Card , AspectRatio } from '@mui/joy';
import AuthorDetails from './AuthorDetails/AuthorDetails';
import { useNavigate } from 'react-router-dom';
import AuthorDropDown from './AuthorDropDown/AuthorDropDown';

function getImageSrc(imagePath) {
    if (imagePath && imagePath.startsWith("https://")) {
        return imagePath; 
    } else if (imagePath && imagePath.startsWith("..")) {
        return `/uploads/${imagePath.split("uploads\\")[1]}`;
    }
}

const CustomCard = ({type , loading = false, isAuthor = false , color , blogData}) => {
  const navigate =  useNavigate();
  return (
        <Card
        variant="elevation"
        orientation={type === 'H' ? 'horizontal' : 'vertical'}
        elevation={0}
        sx={{
            width: '100%',
            padding: 0,
            margin: 0,
            backgroundColor: `${color}`,
            ...(type === 'C' && { flexDirection: { xs: 'row', md: 'column' } }),
        }}
        >
        {isAuthor && <AuthorDropDown blogData={blogData}/> }
        
        <AspectRatio ratio="4/3" className="image-card"
            minHeight={type === 'V' || type==='C' ? '250px' : undefined}
            maxHeight={type === 'V' || type==='C' ? '600px' : undefined}
            sx={
                type === 'H'
                ? { width: '250px' }
                : type === 'C'
                ? { width: { xs: '250px', md: '100%' } } : null
            }
        >          
            {
                loading ?
                    <Skeleton variant='rectangular' width="100%" height="100%" />
                :
                <img
                    src={getImageSrc(blogData?.img)}
                    srcSet={getImageSrc(blogData?.img)}
                    alt=""
                    style={{width: '100%', height: '100%', objectFit: 'cover'}}
                />
            } 
           {!loading && <AuthorDetails authorData={blogData?.userId} createdDate={blogData?.createdAt}/>}
        </AspectRatio>   
        <CardContent>
            {loading ? (
                <>
                    <Skeleton  width="20%"  >
                        <Typography level='title-lg'> . </Typography>
                    </Skeleton>
                    <Skeleton  width="100%" >
                        <Typography level='h1'  marginTop={1}> . </Typography>
                    </Skeleton>
                </>
            ) : (
                <>
                    <Typography color='success' marginBottom={0.5} fontWeight={'bold'} level='title-lg'> {Array.isArray(blogData?.field) ? blogData.field.join(', ') : ''} </Typography>
                    <Typography onClick={() => navigate(`/blogs/signle-blog/${blogData?._id}`)} className='texthover' level='h3' sx={{color: `${color === '#131313' ? 'white' : 'black'}` , cursor: 'pointer' }} marginTop={1}> {blogData?.title} </Typography>
                </>
            )}
           {type==='V' &&
           <Divider orientation='horizontal' sx={{width:"100%" , height: '1px' , marginTop: 1 , display: { md: 'none', xs: 'block'}}  } />}
        </CardContent>
     </Card>
  )
}

export default CustomCard