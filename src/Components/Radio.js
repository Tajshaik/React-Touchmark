import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

const Radio = (props) => {
  const {name, label,options, ...rest} = props
  return (
    <div>
      <Field name={name}>
      {({field})=>{
                return options.map( option =>{
                  console.log(field)
                        return(
                            <React.Fragment key={option.key}>
                                <input type='radio' id={option.value}
                                {...field} 
                                value={option.value}
                                checked={field.value === option.value}
                                {...rest}/>
                                <span className="m-2 text-s font-medium text-gray-900 dark:text-gray-300"
                                 htmlFor={option.value}>{option.key}</span>
                            </React.Fragment>
                        )
                    })
            }}
      </Field>
      <ErrorMessage name={name} component={TextError}/>
    </div>
  )
}

export default Radio