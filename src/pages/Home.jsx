import React from 'react'

const Home = () => {
    const taskImage = 'https://img.freepik.com/free-vector/task-concept-illustration_114360-4293.jpg?size=626&ext=jpg&ga=GA1.2.1872285988.1692796582&semt=ais'

  return (
    <main>
        <div>
            <div>
                <p>Manage your Daily Tasks with <span>To-do</span></p>
                <p>Carefully arrange, collate, and organize your tasks for the Day, Week, or month!</p>
                <p>Get Started</p>
            </div>
            <div>
                <p>TaSkPaD</p>
                <img src={taskImage} alt="task image" />
            </div>
            </div>
    </main>
  )
}

export default Home;