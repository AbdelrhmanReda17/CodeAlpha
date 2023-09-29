import { Box, Modal } from '@mui/material'
import React from 'react'
import { Formik } from 'formik';
import CreateForm from '../CreateForm/CreateForm';
import { Typography } from '@mui/joy';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    p: 4,
};

const ProjectModal = ({isOpen , handleClose , schema , initialValues , onSubmit }) => {
  return (    
    <Formik validationSchema={schema} initialValues={initialValues} onSubmit={onSubmit}>
      {({ errors, touched , setFieldValue  }) => (
        <Modal open={isOpen} onClose={handleClose}>
          <Box sx={{ ...style, width: 500, textAlign: 'center' }}>
              <Typography level='h1'> Edit Blog </Typography>
              <CreateForm errors={errors} type={true}  touched={touched} setFieldValue={setFieldValue} />
          </Box>
        </Modal>
      )}
    </Formik>
  )
}

export default ProjectModal