import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import './Student.css'
import * as yup from "yup";

const FormikForm = () => {
    const formikInitialValues = {
        name:'',
        number:'',
        email:'',
        password:''
    }
    const validation=yup.object().shape({
        name:yup.string().min(5,'Must be 5 characters or more').required('Name is required'),
        number:yup.string().min(10,'Must be 10 characters').required('Phone number is Required'),
        email:yup.string().email('Invalid email address').required('E-mail is Required'),
        password: yup.string()
        .required('No password provided.') 
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    });
    const formSubmit=(values)=>{
        console.log("VALUES",values)
    }
  return (
    <div>
        <Formik initialValues={formikInitialValues}
        validationSchema={validation}
        onSubmit={formSubmit}>
            <Form>
            <div className='container'>
            <div className='card'>
                <h3 style={{textAlign:'center'}}>Formik Validation Form</h3>
                <div className='input_text'>
                    <Field type="text" name='name' placeholder='Enter your Name'/>
                    <p style={{color:"red",marginTop:'7px',fontSize:"14px",}}><ErrorMessage name='name'/></p>
                </div>
                <div className='input_text'>
                    <Field type="number" name='number' placeholder='Phone Number'/>
                    <p style={{color:"red",marginTop:'7px',fontSize:"14px"}}><ErrorMessage name='number'/></p>
                </div>
                <div className='input_text'>
                    <Field type="text" name='email' placeholder='E-mail'/>
                    <p style={{color:"red",marginTop:'7px',fontSize:"14px"}}><ErrorMessage name='email'/></p>
                </div>
                <div className='input_text'>
                    <Field type="password" name='password' placeholder='password'/>
                    <p style={{color:"red",marginTop:'7px',fontSize:"14px"}}><ErrorMessage name='password'/></p>
                </div>
                <div className='btn'>
                    <button type='submit' className='submit_form' onClick={formSubmit}>Submit Form</button>
                </div>
            </div>
            </div>
            </Form>
        </Formik>
    </div>
  )
}

export default FormikForm