import React from 'react';
import './css/TodoItem.css';

const TodoItem = (props) => {
  const onComplete = ()=>{
      alert('Todo finished' + props.text)
  };
  const onDelete = ()=>{
      alert('Delete' + props.text)
  };
  return (
    <li className='TodoItem'>
        <span className={`Icon Icon-check material-symbols-outlined ${props.completed && 'Icon-ckeck--active'}`}
         onClick={onComplete}>
          done
         </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>
        <span className="Icon Icon-delete material-symbols-outlined"
         onClick={onDelete}>
          close
        </span>
    </li>
  )
}

export  {TodoItem}