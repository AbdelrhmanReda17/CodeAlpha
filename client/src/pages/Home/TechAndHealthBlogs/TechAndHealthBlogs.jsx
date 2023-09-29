import { Grid } from '@mui/material'
import React from 'react'
import CustomCard from '../../../components/common/Card/Card'

const TechAndHealthBlogs = ({Blogs , loading = false , color}) => {
  return (
    <Grid sx={{backgroundColor: color}} container spacing={2} wrap="wrap">
            <Grid item xs={12} md={6} key={0}>
                    <CustomCard loading={loading} color={color} type="V" blogData={Blogs[0]} />
            </Grid>
        <Grid item direction="column" container spacing={1} xs={12} md={6}>
            {Blogs.map((blog, index) => (
            index !== 0 &&
                <Grid item key={index}>
                    <CustomCard loading={loading} color={color} type="H" blogData={blog} />
                </Grid>
            ))}
        </Grid>
    </Grid>
  )
}

export default TechAndHealthBlogs