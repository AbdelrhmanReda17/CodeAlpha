import React, { useEffect , useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Box, Typography} from '@mui/joy';
import ErrorIcon from '@mui/icons-material/Error';
import { red } from '@mui/material/colors';

const Error = () => {
  const navigate = useNavigate();

  useEffect(()=> {
    setTimeout(()=> {
        navigate('/')
    } , 3000)
  })

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} padding={4}>
        <ErrorIcon sx={{ color: red[500] , fontSize: 250 }} />
        <Typography sx={{ color: red[500] ,fontSize: 100}} level="h1">PAGE NOT FOUND !</Typography>
        <Typography sx={{ color: red[300]}} level="h1">you will be redirected to home page in few seconds..</Typography>
    </Box>
  )
}

export default Error