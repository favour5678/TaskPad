// // import React, { useState } from 'react'

// const TodoTemplate = (props) => {
//   const toDoValue = props.propsToDo
//   const value = props.props

//   // console.log(toDoValue);
//   // console.log(value);
//   return (
//     <section>
//       {
//         toDoValue
//       }
//     </section>
//   )
// }

// export default TodoTemplate;

const TodoTemplate = (props) => {
  const toDoList = props.propsToDo

  return (
    <section>
      {toDoList}
    </section>
  )
}

export default TodoTemplate;