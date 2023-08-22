import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch} from 'react-redux';
import { setLogout } from '../Utilities/AuthSlice';

const Header = () => {
    const Navigate = useNavigate();
    const dispatch = useDispatch()
    const handlelogOut =()=>{
        dispatch(setLogout)
        return Navigate('/')
    }
  return (
    <div className='grid grid-flow-col m-1 shadow-lg'>
     <div className='col-span-2'>
      <img className='h-8 p-1 m-1 cursor-pointer'
      src='https://touchmarkdes.com/images/logo/logo.png' alt='logo'/>
     </div>
     <div className='col-span-8 flex font-serif'>
     <Link to='Newtransaction'className='px-2 m-2 hover:font-bold'>New Transaction</Link>
     <Link to='ViewSubmittedTransaction'className='px-2 m-2 hover:font-bold'>View Submitted Transaction</Link> 
     <Link to='UserProfile'className='px-2 m-2 hover:font-bold'>User Profile</Link>
     </div>
     <div className='col-span-2 '>
      <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={()=>handlelogOut()}>Logout</button>
     </div>
    </div>
  )
}

export default Header