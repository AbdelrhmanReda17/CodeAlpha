import { Link , Typography , Breadcrumbs } from '@mui/joy';
import { Container, Grid } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getBlogs } from '../../store/blogsActions';
import CustomCard from '../../components/common/Card/Card';
import { Pagination } from '../../components';
function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  
const Blogs = ({searchText = null}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { type } = useParams();
  const query = useQuery();
  const page = query.get('page') || 1;
  const { blogs } =useSelector((state) => state.blogsReducer);
  const {isLoading} = useSelector((state)=>state.appReducer)
  React.useEffect(() => {
      if(type !== 'all' && type !=='artsandculture' && type !== 'health' && type !== 'opinion'&& type !== 'science' && type !== 'technology' && type !== 'travel' && type !=='search' ){
        navigate('/error');
      }
      dispatch(getBlogs(page,type , null , searchText));
  },[page , type , dispatch , searchText , navigate]);
  return (
    <Container maxWidth="xl" sx={{ maxWidth: "1600px !important" , paddingBottom: 4 }}>
        <Breadcrumbs size='lg' aria-label="breadcrumbs" >
            <Link color="neutral" href="/"  >
              Home
            </Link>
            <Typography color="neutral" href={`/blogs/${type}`}>
              {type === 'artsandculture' ? 'Arts & Culture' : type==='all' ? "All Blogs" : type.charAt(0).toUpperCase() + type.slice(1)}
            </Typography>
        </Breadcrumbs>
        {
          blogs.length === 0 && page === 1 && !isLoading ? <h1 style={{textAlign : "center"}}> No Blogs</h1> :
          blogs.length === 0 && page !== 1 && !isLoading ? <Navigate to={`${location.pathname}?page=${1}`}/>
        :
        <Grid container spacing={3}>
            {blogs.map((blog) => (
                <Grid item xs={12} sm={6} md={3} key={blog._id}>
                <CustomCard loading={isLoading} color={"white"}  blogData={blog} type={'C'} />
            </Grid>
            ))}
        </Grid>
      }
      <Pagination/>
    </Container>
  )
}

export default Blogs