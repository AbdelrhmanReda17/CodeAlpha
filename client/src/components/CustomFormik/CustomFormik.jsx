import React from 'react'
import { Formik } from 'formik'
import AuthForm from '../AuthForm/AuthForm'
import { Box } from '@mui/joy'
import CreateForm from '../CreateForm/CreateForm'

const CustomFormik = ({schema , initialValues , onSubmit , type}) => {
  return (
      <Formik validationSchema={schema} initialValues={initialValues} onSubmit={onSubmit}>
        {({ errors, touched , setFieldValue  }) => (
            type === 'Login' || type ==='Register' ? <AuthForm type={type} errors={errors} touched={touched} setFieldValue={setFieldValue} /> : <CreateForm errors={errors} initialValues={initialValues} touched={touched} setFieldValue={setFieldValue}/>
        )}
      </Formik>
  )
}

export default CustomFormik