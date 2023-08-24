import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoEllipseSharp } from 'react-icons/io5'
import { BsFilterLeft } from 'react-icons/bs'
import userIcon from '../images/userIcon.png'

const Dashboard = () => {
    

  return (
    <section className='bg-red-100 container max-w-full h-screen'>
       <div className='bg-green-50 w-[20%] h-full shadow space-y-10 pt-6'>
       <div className='flex items-center justify-center space-x-6'>
            <img src={userIcon} alt="user-icon" className='h-12 bg-white rounded-full'/>
            <p className='font-bold text-lg'>Hello User &#128075;</p>
        </div>
        <button className='flex justify-center items-center mx-auto space-x-4 bg-green-400 w-[230px] h-[48px] rounded-full'>
            <AiOutlinePlus className='text-xl'/>
            <p className='text-lg font-bold'>Create task</p>
        </button>
        <p className='font-bold text-xl bg-green-200 h-[48px] flex items-center pl-6'>Calendar</p>
        <div className='space-y-3 pl-6'>
            <p className='font-bold text-xl'>Sort</p>
            <ol>
                <li className='font-semibold flex items-center'><IoEllipseSharp className='text-green-400 text-sm mr-2'/>Day</li>
                <li className='font-semibold flex items-center'><IoEllipseSharp className='text-yellow-400 text-sm mr-2'/>Month</li>
                <li className='font-semibold flex items-center'><IoEllipseSharp className='text-blue-400 text-sm mr-2'/>Year</li>
            </ol>
        </div>
        <p className='pt-28'>
            <BsFilterLeft className='text-4xl ml-6 text-green-400'/>
        </p>
       </div>
    </section>
  )
}

export default Dashboard;