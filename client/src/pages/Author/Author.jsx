import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { getBlogs , getAuthor } from '../../store/blogsActions';
import { Typography , AspectRatio, Container, Grid, CardContent , Card, Box} from '@mui/joy';
import CustomCard from '../../components/common/Card/Card';
import Paginate from '../../components/Pagination/Pagination';
import {  Skeleton, Divider,  } from '@mui/material';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import moment from 'moment';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function getImageSrc(imagePath) {
  if (imagePath && imagePath.startsWith("https://")) {
      return imagePath; 
  } else if (imagePath && imagePath.startsWith("..")) {
      return `/uploads/${imagePath.split("uploads\\")[1]}`;
  }
}

const Author = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const query = useQuery();
  const { blogs , numberOfBlogs , Author } =useSelector((state) => state.blogsReducer);
  const { isLoading } = useSelector((state)=>state.appReducer);
  const page = query.get('page') || 1;
  useEffect(()=>{
    dispatch(getAuthor(id));
    dispatch(getBlogs(page , null , id));
  },[id , page, dispatch])
  return (
    <Container maxWidth="xl" sx={{ maxWidth: "1600px !important" , paddingBottom: 4 }}>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center"  >
      <Card  size="sm" variant='plain' sx={{ flexDirection: { xs: 'column', md: 'row' },backgroundColor: "white" , padding: 0 , margin : 0 , gap: '20px'}}>
          <AspectRatio  ratio="1" sx={{borderRadius: 40 , minWidth: 200}}>
            {(isLoading || !Author) ? (
              <Skeleton variant='rectangular' />
            ) : (
              <img
                src={`${getImageSrc(Author?.user?.img)}?h=400&fit=crop&auto=format`}
                alt="IMG"
                srcSet={`${getImageSrc(Author?.user?.img)}?h=400&fit=crop&auto=format&dpr=2 2x`}
              />
            )}
          </AspectRatio>
          <CardContent sx={{ padding: 0, marginTop: "20px" }}>
            <Typography level="h1" sx={{ marginBottom: "8px", fontSize: "28px", fontWeight: "bold" }}>
              {Author?.user?.username}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography level="title-lg" sx={{ marginBottom: "8px" }}>
                Email: 
              </Typography>
              <Typography level="title-md" sx={{ marginBottom: "8px" }}>    
                  {Author?.user?.email}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography level="title-lg" sx={{ marginBottom: "8px" }}>
              Joined From: 
              </Typography>
              <Typography level="title-md" sx={{ marginBottom: "8px" }}>    
                {moment(Author?.user?.createdAt).fromNow()}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography level="title-lg" sx={{ marginBottom: "8px" }}>
              Total Blogs : 
              </Typography>
              <Typography level="title-md" sx={{ marginBottom: "8px" }}>    
              {Author?.TotalBlogs}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Divider sx={{ height: 2, borderRadius: 10 , marginTop: 4, marginBottom: 4, backgroundColor: 'black' }} />
      <SectionHeader text={"Author Recent Blogs"} />
      {
          blogs.length === 0 && page === 1 && !isLoading ? <h1 style={{textAlign : "center"}}> No Blogs</h1> :
          blogs.length === 0 && page !== 1 && !isLoading ? <Navigate to={`/user/blogs/${id}?page=${1}`}/>
        :
        <Grid container spacing={3}>
            {blogs.map((blog) => (
                <Grid item xs={12} sm={6} md={3} key={blog._id}>
                    <CustomCard loading={isLoading} color={"white"} isAuthor={Boolean(id === JSON.parse(localStorage.getItem("auth"))?.result?._id )}  blogData={blog} type={'C'} />
            </Grid>
            ))}
        </Grid>
      }
      <Paginate/>
    </Container>
  )
}

export default Author