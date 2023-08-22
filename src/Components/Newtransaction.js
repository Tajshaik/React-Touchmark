import React from 'react'
import { Formik, Form } from 'formik'
import Formcontrol from './Formcontrol'
import * as Yup from 'yup';

const initialValues ={
 reference: 'CUS',
 customernumber:'',
 customername:'',
 radio:'',
 cusphnum:'',
 transferamount:'',
 Transfercurrency:'',
 BeneficiaryBank:'',
 paymentdeatils:'',
 CardDetails:'',
 BeneficiaryAccount:'',
 Region:''
}

const ValidationSchema = Yup.object({
  reference : Yup.string().required('please enter reference'),
  customernumber: Yup.number().required('please enter customer number'),
  customername: Yup.string().required('please enter customer name'),
  radio: Yup.string().required('required a option'),
  cusphnum: Yup.number().required('please enter customer phome number'),
  transferamount: Yup.string().required('please enter amount'),
  BeneficiaryBank:Yup.string().required('please enter beneficiary bank'),
  Transfercurrency:Yup.string().required('please select trsnsfer currency'),
  paymentdeatils:Yup.string().required('please select payment details curency'),
  CardDetails:Yup.string().required('please select trasnsfer currency'),
  BeneficiaryAccount:Yup.number().required('please enter   Beneficiary Account number'),
  Region: Yup.string().required('please select  Region'),
})

const radioOptions = [{
  key : 'New' , value:'new1'
},
{
  key : 'Existing' , value:'existing1'
}]

const RegionOptions=[
  { key: 'Select an option', value: '' },
  { key: 'Port Louis', value: 'PortLouis' },
  { key: 'Curepipe', value: 'Curepipe' },
  { key: 'Vacoas', value: 'Vacoas' },
  { key: 'Port Mathurin', value: 'Port Mathurin' }
]

const CurrencyOptions=[
  { key: 'Select an option', value: '' },
  { key: 'AED', value: 'AED' },
  { key: 'EUR', value: 'EUR' },
  { key: 'CHF', value: 'CHF' },
  { key: 'MUR', value: 'MUR' },
  { key: 'USD', value: 'USD' },
]

const paymentoptions =[
  { key: 'Select an option', value: '' },
  { key: 'Card', value: 'Card' },
  { key: 'Net Banking', value: 'Net Banking' },
  { key: 'UPI', value: 'UPI' }
]

const onSubmit =(Values)=>{
  console.log(Values)
}

const Newtransaction = () => {
 
  return (
    <Formik className='w-full max-w-lg' initialValues={initialValues} 
    submit={onSubmit} validationSchema={ValidationSchema}>
   {
    Formik =>(
      <Form >
        <div className="flex flex-wrap items-center m-6">
        <Formcontrol className='items-center'
        control='Radio'
        name='radio' 
         options={radioOptions}/>
        </div>
        <div className="flex flex-wrap  m-6">
        <Formcontrol 
        control='Input'
        name='reference' 
        label='reference' 
        type='text'/>
        <Formcontrol 
        control='Input'
        name='customernumber' 
        label='Customer Number' 
        type='number'/>
        </div>
        <div className="flex flex-wrap  m-6">
        <Formcontrol 
        control='Input'
        name='customername' 
        label='Customer Name' 
        type='text'/>
        <Formcontrol 
        control='Input'
        name='customeraddress' 
        label='Customer Address' 
        type='text'/>
        </div>
        <div className="flex flex-wrap  m-6">
        <Formcontrol 
        control='Input'
        name='cusphnum' 
        label='Customer phone Number' 
        type='number'/>
        <Formcontrol 
        control='Input'
        name='transferamount' 
        label='transfer amount' 
        type='number'/>
        </div>
        <div className="flex flex-wrap  m-6">
        <Formcontrol 
        control='Dropdown'
        name='Transfercurrency' 
        label='Transfer currency'
        options={CurrencyOptions} />
        <Formcontrol 
        control='Input'
        name='BeneficiaryBank' 
        label='Beneficiary Bank' 
        type='text'/>
        </div>
        <div className="flex flex-wrap  m-6">
        <Formcontrol 
        control='Dropdown'
        name='paymentdeatils' 
        label='payment deatils'
        options={paymentoptions}/>
        <Formcontrol 
        control='Input'
        name='CardDetails' 
        label='Credit/Debit Card 
        Details' 
        type='text'/>
        </div>
        <div className="flex flex-wrap  m-6">
        <Formcontrol 
        control='Input'
        name='BeneficiaryAccount' 
        label='Beneficiary Account Number' 
        type='Number'/>
        <Formcontrol 
        control='Dropdown'
        name='Region' 
        label='Region'
        options={RegionOptions} />
        </div>
        <button className="bg-blue-500 m-5 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
        type='submit'>Submit</button>
      </Form>
    )
   }
    </Formik>
  )
}

export default Newtransaction