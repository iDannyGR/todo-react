import React from 'react';
import './TodoItem.css';

const TodoItem = (props) => {
  return (
    <li className='TodoItem'>
        <span className={`Icon Icon-check material-symbols-outlined ${props.completed && 'Icon-ckeck--active'}`}
         onClick={props.onComplete}>
          done
         </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
        <span className="Icon Icon-delete material-symbols-outlined"
         onClick={props.onDelete}>
          close
        </span>
    </li>
  )
}

export  {TodoItem}