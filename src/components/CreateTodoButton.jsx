import React from 'react'
import './css/CreateTodoButton.css'

const CreateTodoButton = (props) => {
  const onClickButton = ()=>{
    alert('add new todo');
  }
  return (
    <button className='CreateTodoButton'
    onClick={onClickButton}>
      +
    </button>
  )
}

export  {CreateTodoButton}