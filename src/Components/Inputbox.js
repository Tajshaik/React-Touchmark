import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

const Inputbox = (props) => {
    const {label, name, type,...rest} = props
  return (
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <span htmlFor={name} className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2">{label}</span>
        <Field className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
         type={type}  name={name} {...rest}/>
        <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Inputbox