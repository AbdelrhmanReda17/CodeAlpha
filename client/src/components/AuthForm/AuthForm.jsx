import React, { useState } from 'react'
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { Form, Field } from 'formik';
import { Box, Typography } from '@mui/joy';
import { Paper } from '@mui/material';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

const AuthForm = ({type , errors , touched , setFieldValue}) => {
   const [imageValue , setImageValue] = useState('');
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
    <Paper square sx={{ width:{xs: '80%' ,  md :"50%", lg:"40%" , padding: "33px 60px 50px 50px" , textAlign: 'center' }}} elevation={2}>
        <Typography level='h1' sx={{marginBottom: "16px"}}> {type} </Typography>
        <Typography  color='neutral' level='title-md'  sx={{marginBottom: "16px"}} > Enter Login details to get access </Typography>
        <Form style={{display: "flex", flexDirection: "column"  , gap:"25px" }}>
            {type !== 'Login' &&                
                <FormControl size='large' variant="standard" error={touched.name && errors.name}>
                <InputLabel> Name </InputLabel>
                <Field  size='large' as={Input}  label="Name" name='name' type="text" variant="standard"  />
                    {touched.name && errors.name && (
                        <FormHelperText size='large' sx={{ display :" flex", justifyContent: "start" , alignItems: "center" , gap:"2px" , fontSize:"10px" }}> <InfoOutlined  />   Oops! {errors.name}
                        </FormHelperText>
                    )}
                </FormControl>
            }
            <FormControl variant="standard" error={touched.email && errors.email}>
            <InputLabel> Email </InputLabel>
            <Field as={Input}   label="Email" name='email' type="email" variant="outlined"  />
                {touched.email && errors.email && (
                    <FormHelperText sx={{ display :" flex", justifyContent: "start" , alignItems: "center" , gap:"2px" , fontSize:"10px" }}> <InfoOutlined  />   Oops! {errors.email}
                    </FormHelperText>
                )}
            </FormControl>

            <FormControl variant="standard" error={touched.password && errors.password}>
                <InputLabel> Password </InputLabel>
            <Field as={Input} name='password'  variant="outlined" type="password" />
                {touched.password && errors.password && (
                    <FormHelperText sx={{ display :" flex", justifyContent: "start" , alignItems: "center" , gap:"2px" , fontSize:"10px" }}> <InfoOutlined  />   Oops! {errors.password}
                    </FormHelperText>
                )}
            </FormControl>


            {type !== 'Login' &&
            <>
                <FormControl  variant="standard" error={touched.confirmPassword && errors.confirmPassword}>
                <InputLabel> Confirm Password </InputLabel>
                <Field as={Input}  variant="standard" name='confirmPassword' type="password" />
                    {touched.confirmPassword && errors.confirmPassword && (
                        <FormHelperText sx={{ display :" flex", justifyContent: "start" , alignItems: "center" , gap:"2px" , fontSize:"10px" }}> <InfoOutlined  />   Oops! {errors.confirmPassword}
                        </FormHelperText>
                    )}
                </FormControl>
                <FormControl  variant="standard" error={(touched.img && errors.img ? true : false)}>
                    <InputLabel> Image </InputLabel>
                    <Field as={Input} name='img' type="file" onChange={(e) => { setImageValue(e.target.files[0]); setFieldValue('img', e.target.files[0]); }} value={imageValue.fieldName} />
                    {touched.img && errors.img && (
                            <FormHelperText sx={{ display :" flex", justifyContent: "start" , alignItems: "center" , gap:"2px" , fontSize:"10px" }}> <InfoOutlined  />   Oops! {errors.img}
                            </FormHelperText>
                    )}
                </FormControl>
            </>
            }
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems={"center"}>
                {type === 'Login' &&
                    <Typography level="h4" className="mb-3 text text-center">
                        Don&apos;t  have an account? <Link href='/register' disabled={false} underline="hover" variant="plain" > Sign Up </Link>
                    </Typography>
                }
                <Button type="submit" variant="solid" color="primary">
                    {type === 'Login' ? 'Login' : 'Register'}
                </Button>
            </Box>
        </Form>
    </Paper>
    </Box>
  )
}

export default AuthForm