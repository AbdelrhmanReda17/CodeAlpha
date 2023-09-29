import React, { useEffect } from 'react'
import Container from '@mui/material/Container'
import { Box, Link , Breadcrumbs, Typography } from '@mui/joy'
import CustomFormik from '../../components/CustomFormik/CustomFormik'
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { signup , signin } from '../../store/authAction';
import { useNotification } from '../../hooks';
import { useNavigate  } from 'react-router-dom';
import Notification from '../../components/Notification/Notification';
import { createBlog } from '../../store/blogsActions';


const AuthAndBlog = ({type}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const { isLoading , error  } = useSelector((state) => state.appReducer);
    const { blog } = useSelector((state) => state.blogsReducer);
    const [notificationOpen , handleOpen , handleClose] = useNotification();
    const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
    var schema , initialValues;
    if(type === 'Login' || type === 'Register'){
      schema = yup.object().shape({        
        name: yup.string(),
        email: yup.string().required("You must add an email").email("Invalid email format"),
        password: yup.string().required('No password provided.').min(8, 'Password is too short - should be 8 chars minimum.'),
        confirmPassword: yup.string(),
        img: yup.mixed()
      });

      if (type !== "Login") {
        schema.fields.name = schema.fields.name.required('You must add a name').min(3, 'Name is too short - should be 3 chars minimum.');
        schema.fields.confirmPassword = schema.fields.confirmPassword.oneOf([yup.ref('password'), null], 'Passwords must match');
        schema.fields.img = schema.fields.img.required("You must add an image").test("type", "Only the following formats are accepted: .jpeg, .jpg, .png", (value) => {
        return value && SUPPORTED_FORMATS.includes(value.type);
        });
      }

      initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        img: ''
      }
    }else{
      schema = yup.object().shape({        
        title: yup.string().required('You must add a title').min(3, 'Title is too short - should be 3 chars minimum'),
        description: yup.string().required("You must add an description").min(3, 'You must add an description of at least 3 characters'),
        img: yup.mixed().required("You must add an image").test("type", "Only the following formats are accepted: .jpeg, .jpg, .png", (value) => {
          return value && SUPPORTED_FORMATS.includes(value.type)
        }),
        field : yup.array().of(yup.string('you must add a string field')).required("You must add at least one field").min(1, "You must add at least one field")
      });
      initialValues = {
        title: '',
        description: '',
        img: '',
        field : ''
      }
    }



  const onSubmit = (FData) => {
    const data = new FormData();
    for(const [key, value] of Object.entries(FData)) {
      data.append(key, value);
    }
    if (type === "Login") {
       dispatch(signin(data , navigate));
    }else if (type === 'Register'){
      dispatch(signup(data , navigate));
    }else{
      data.append("userId" , JSON.parse(localStorage.getItem("auth")).result._id);
      dispatch(createBlog(data));
    }
    handleOpen();
  };
  useEffect(() => {
    if(type === 'Create Blog' && blog._id ){
     setTimeout(() => {
        navigate(`/blogs/signle-blog/${blog._id}`);
    }, 1500);
    }      
  }, [blog, navigate]);
  return (
    <Container maxWidth="xl" sx={{ maxWidth: "1600px !important" , paddingBottom: 4 }}>
      <Breadcrumbs size='lg' aria-label="breadcrumbs">
          <Link color="neutral" fontFamily={"monospace"} fontSize={"lg"} href="/">
            Home
          </Link>
          <Typography color="neutral"  fontFamily={"monospace"} fontSize={"lg"}  href="">
            {type}
          </Typography>
      </Breadcrumbs>
          <Box elevation={0}>
              <CustomFormik schema={schema} initialValues={initialValues} onSubmit={onSubmit} type={type}/>
          </Box>
          {
          (!isLoading || error) &&
              <Notification notificationOpen={notificationOpen} handleClose={handleClose} type={type} error={error}/>
          }             
    </Container>
  )
}

export default AuthAndBlog