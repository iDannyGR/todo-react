import React from 'react';
import './css/TodoItem.css';

const TodoItem = (props) => {
  return (
    <li className='TodoItem'>
        <span className={`Icon Icon-check material-symbols-outlined ${props.completed && 'Icon-ckeck--active'}`} >done</span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
        <span className="Icon Icon-delete material-symbols-outlined">close</span>
    </li>
  )
}

export  {TodoItem}