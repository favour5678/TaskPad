import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoEllipseSharp } from 'react-icons/io5'
import { BsFilterLeft } from 'react-icons/bs'
import userIcon from '../images/userIcon.png'

const Dashboard = () => {
    

  return (
    <section className='bg-red-100 container max-w-full h-screen'>
       <div className='bg-green-50 w-[22%] h-full shadow'>
       <div className='flex items-center justify-center space-x-4'>
            <img src={userIcon} alt="user-icon" className='h-12 bg-white rounded-full'/>
            <p className='font-bold text-lg'>Hello User &#128075;</p>
        </div>
        <button className='flex justify-center items-center mx-auto space-x-4 bg-green-400 w-[242px] h-[48px] rounded-full'>
            <AiOutlinePlus className='text-xl'/>
            <p className='text-lg font-bold'>Create task</p>
        </button>
        <p className='font-bold text-xl bg-green-200 h-[48px] flex items-center pl-4'>Calendar</p>
        <div>
            <p className='font-bold text-xl'>Sort</p>
            <ol>
                <li className='font-semibold'><IoEllipseSharp className='text-green-400 text-sm'/>Day</li>
                <li className='font-semibold'><IoEllipseSharp className='text-yellow-400 text-sm'/>Month</li>
                <li className='font-semibold'><IoEllipseSharp className='text-blue-400 text-sm'/>Year</li>
            </ol>
        </div>
        <BsFilterLeft className='text-3xl'/>
       </div>
    </section>
  )
}

export default Dashboard;