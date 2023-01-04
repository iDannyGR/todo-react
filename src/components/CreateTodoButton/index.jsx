import React from 'react'
import './CreateTodoButton.css'

const CreateTodoButton = (props) => {
  const onClickButton = ()=>{
        props.setOpenModal(!props.openModal); //Save the value openModal negate
    //props.openModal ? props.setOpenModal(false) : props.setOpenModal(true);
  }
  return (
    <button className='CreateTodoButton'
    onClick={onClickButton}>
      +
    </button>
  )
}

export  {CreateTodoButton}