import React from 'react';
import './HeaderTodo.css';

const HeaderTodo = ({children}) => {
  return (
    <header className='spikes'>
      {children}
    </header>
  )
}

export  {HeaderTodo}