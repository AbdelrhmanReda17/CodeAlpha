import {  Box,Button, FormHelperText, FormLabel, FormControl ,Input, Textarea, IconButton, Option, Select , Autocomplete   } from '@mui/joy';
import {  TextField} from '@mui/material';
import { Form, Field, useField  } from 'formik';
import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
const CreateForm = ({ errors , touched , type=false , setFieldValue}) => {
  const fields = [
     "Technology",
      "Art & Culture",
       "Opinion",
      "Travel",
       "Science",
       "Health",
  ]
  const [imageValue , setImageValue] = React.useState('');
  const [field , meta, {setValue , reset} ] = useField('field');

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}  width={'100%'} >
        <Form style={{width: "80%" , display: 'flex' , flexDirection: "column" , rowGap: 20}} >
            <FormControl error={touched.title && Boolean(errors.title)} >
               <FormLabel> Title </FormLabel>
                <Field as={Input} name='title' type="text" variant="outlined" sx={{ '--Input-radius': '6px' , '--Input-minHeight': '40px'}}/>
                {touched.title && errors.title && (
                  <FormHelperText>
                    <InfoOutlinedIcon /> Oops! {errors.title}
                  </FormHelperText>
                )}
             </FormControl>

            <FormControl error={touched.description && errors.description}>
              <FormLabel> Description </FormLabel>
                <Field as={Textarea} minRows={4} name='description' type="text" error={touched.description && Boolean(errors.description)} helperText={touched.description && errors.description} variant="outlined"placeholder="Type something here…"/>
                {touched.description && errors.description && (
                  <FormHelperText>
                    <InfoOutlinedIcon /> Oops! {errors.description}
                  </FormHelperText>
                )}
                </FormControl>
              {type === false &&
              <>  
                <FormControl width={'auto'} error={touched.img && Boolean(errors.img)} >
                  <FormLabel> Image </FormLabel>
                    <Field as={Input} name='img' type="file" variant="outlined"  sx={{ '--Input-radius': '6px' , '--Input-minHeight': '40px', alignItems:'center'}} onChange={(e) => { setImageValue(e.target.files[0]); setFieldValue('img', e.target.files[0]); }} value={imageValue?.fieldName}  />
                    {touched.img && errors.img && (
                      <FormHelperText>
                        <InfoOutlinedIcon /> Oops! {errors.img}
                      </FormHelperText>
                    )}
                </FormControl>
                <FormControl  error={touched.field && errors.field}>
                <FormLabel> Field </FormLabel>
                <Autocomplete
                  multiple
                  id="tags-default"
                  placeholder="Choose a Field"
                  options={fields}
                  onReset={() => {reset('field');}}
                  getOptionLabel={(option) => option}
                  sx={{ "--Chip-minHeight": "30px" , "MuiAutocompleteListbox " :{zIndex: 2 }  }}
                  onChange={((e, newValue) => {setValue(newValue);})}

                />
                {touched.field && errors.field && (
                      <FormHelperText>
                        <InfoOutlinedIcon /> Oops! {errors.field}
                      </FormHelperText>
                    )}
                </FormControl>
              </>
              }
                <Button  sx={{marginLeft:"auto" , width: "240px"}} fullWidth  type="submit" variant="solid" color="primary">
                    Submit
                </Button>
        </Form>
    </Box>
  )
}

export default CreateForm