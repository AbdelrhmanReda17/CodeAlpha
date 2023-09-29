import { Grid } from '@mui/material'
import React from 'react'
import CustomCard from '../../../components/common/Card/Card'

const ArtAndOpinionBlogs = ({Blogs , loading=false}) => {
  return (
        <Grid container spacing={2} wrap="wrap">
            {Blogs.map((blog, index) => (
                <Grid item  key={index} xs={12} md={6} lg={3}>
                    <CustomCard loading={loading} color={"white"} blogData={blog} type='C'/>
                </Grid>
            ))}
        </Grid> 
  )
}

export default ArtAndOpinionBlogs