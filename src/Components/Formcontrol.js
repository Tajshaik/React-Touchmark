import React from 'react'
import Inputbox from './Inputbox'
import Textarea from './Textarea'
import Radio from './Radio'
import Dropdown from './Dropdown'

const Formcontrol = (props) => {
    const {control , ...rest} =props
   switch(control){
      case 'Input' :
        return <Inputbox {...rest} />
      case 'Textarea':
        return <Textarea {...rest}/>
      case 'Radio':
        return <Radio {...rest}/>
      case 'Dropdown':
        return <Dropdown {...rest}/>
      default:
        return null
   }
}

export default Formcontrol