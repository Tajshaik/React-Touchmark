import React from 'react'
import { Logo } from '../Utilities/Constants';
import { Formik,Form , Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';
import {Navigate, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { setLogin } from '../Utilities/AuthSlice';

const initialValues={
    username:'',
    password:''
}

const validationschema= Yup.object({
    username: Yup.string().required('Please enter username'),
    password: Yup.string().required('Please enter the password')
})






function Login() {
  const Navigate = useNavigate()  
  const dispatch = useDispatch();
  const onSubmit= (values)=>{
    if(values.username === 'c083808' && values.password ==='Hazirafi$95$'){
      dispatch(setLogin())
      return Navigate('/Home')
    }
    else {
     console.log('Invalid details')
    }
  }
  return (
    <>
      <img src={Logo} className="App-logo" alt="logo" />
      <Formik
        initialValues={initialValues} validationSchema={validationschema} onSubmit={onSubmit}>
        <Form className="bg-white  rounded px-8 py pt-6 pb-8 mb-4">

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor='username'>User Name</label>
            <Field className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type='text' name='username' id='username' placeholder='Enter Username' />
            <ErrorMessage name='username' component={TextError} />
          </div>
          <div className="mb-6">
            <label htmlFor='password'
              className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <Field className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type='text' name='password' id='password' placeholder='Enter Password' />
            <ErrorMessage name='password' component={TextError} />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type='submit'>Submit</button>

        </Form>
      </Formik>
    </>
  );
}

export default Login