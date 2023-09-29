import { Link, Typography } from '@mui/joy'
import { Avatar, Box } from '@mui/material'
import React from 'react'
import moment from 'moment'
const AuthorDetails = ({authorData , createdDate}) => {
  return (
    <Box
        className="avatar-overlay texthover"
        component={Link}
        href={`/user/blogs/${authorData?._id}`}
        underline="none"
        gap={1}      
        style={{
        display: 'flex',
        position: 'absolute',
        bottom: '10px',
        transform: 'translateX(5%)',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: 'white',
        }}
    >
        <Avatar  sx={{ backgroundColor: 'primary.main', color: 'inherit' }} src={authorData?.img} />
        <Box color={'inherit'} display={'flex'} flexDirection={'column'}> 
          <Typography   sx={{color: `inherit` }} marginTop={0.5} fontWeight={'bold'} level='h4'> {authorData?.username} </Typography>
          <Typography  sx={{color: `white`}}  fontWeight={'bold'} level='title-md'> {moment(createdDate).fromNow()} </Typography>
        </Box>
    </Box>      
  )
}

export default AuthorDetails