import React from 'react'
import { cloneElement, Children } from 'react';
import './HeaderTodo.css';

const HeaderTodo = ({children, loading}) => {
    const rChildren = Children.toArray(children);
    
  return (
    <header className='spikes'>
      {
      rChildren.map(child => cloneElement(child, {loading}) )
      }
    </header>
  )
}

export  { HeaderTodo }