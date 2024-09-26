import { Link } from 'react-router-dom'

import { IoIosInformationCircle } from "react-icons/io";
import useScrollToTop from '../hooks/useScrollToTop';

const Success = () => {
  useScrollToTop();
  return (
    <div className='min-h-screen w-full flex flex-col justify-center items-center space-y-20 px-2'>
        <div className='max-w-[400px]'>
          <img src="/sent.svg" alt="" 
          className='w-full h-full object-cover'/>
        </div>
        <h1 className='text-[60px]'>Your Payment is Successful</h1>
        <div className='flex space-x-3 bg-[#D7F1FD] p-3 rounded-md'>
          <IoIosInformationCircle size={24} color='blue' />
          <span className='text-[#0C2A75]'>Within 24 hours you will receive a message to the email address you provided with details.</span>
        </div>
        <Link to={'/'}>
            <button className='inline-flex px-32 py-4 rounded-md bg-base-primary hover:bg-base-primaryDark transition-all duration-700 ease-in-out text-base-white mb-40'>Back Home</button>
        </Link>
    </div>
  )
}

export default Success