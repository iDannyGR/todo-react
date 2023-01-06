import React from 'react';
import './HeaderTodo.css';
import { TodoCounter } from '../TodoCounter';

const HeaderTodo = () => {
  return (
    <header className='spikes'>
      <TodoCounter />
    </header>
  )
}

export  {HeaderTodo}