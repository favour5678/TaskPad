import React from 'react'

const Home = () => {
    const taskImage = 'https://img.freepik.com/free-vector/task-concept-illustration_114360-4293.jpg?size=626&ext=jpg&ga=GA1.2.1872285988.1692796582&semt=ais'

  return (
    <main className='bg-gray-50 h-screen max-w-full container'>
        <div className='flex justify-around pt-20'>
            <div className='space-y-28'>
                <p className='text-3xl font-bold'>Manage your Daily <br /> Tasks with <span className='text-green-400'>To-do</span></p>
                <p className='text-gray-500 text-xl font-semibold tracking-wide'>Carefully arrange, collate, and <br /> organize your tasks for the <br /> Day, Week, or month!</p>
                <button className='bg-green-300 w-[200px] h-[48px] rounded-full flex justify-center items-center text-white text-lg shadow-md'>Get Started</button>
            </div>
            <div className='flex flex-col items-end justify-center'>   
                <p className='text-xl font-bold bg-green-300 w-28 h-9 rounded-full flex justify-center items-center mb-12'>TaskPad</p>
                <img src={taskImage} alt="task image" className='h-[340px] shadow-md'/>
            </div>
        </div>
    </main>
  )
}

export default Home;