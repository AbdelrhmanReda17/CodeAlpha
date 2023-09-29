import { Box, Typography , Link } from '@mui/joy'
import React from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const SectionHeader = ({color ='#131313' , text , type=''}) => {
  return (
    <Box display="flex" sx={{marginTop : 3  , marginBottom : 3}} justifyContent={'space-between'} alignItems={'center'}>
    <Typography sx={{color : `${color}`}} level='h1'> {text} </Typography>
    {(text !== 'Related Blogs' && text !== 'Author Recent Blogs') &&
        <Box display="flex" component={Link} href={`/blogs/${type}`} underline="none" variant="plain" gap={1} alignItems={'center'}>
            <Typography level='h6'> See More  </Typography>
            <KeyboardDoubleArrowRightIcon margin={0} padding={0} />
        </Box>
    }
    </Box>    
  )
}


export default SectionHeader