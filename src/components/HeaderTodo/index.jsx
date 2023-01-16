import { cloneElement, Children } from 'react';
import './HeaderTodo.css';

const HeaderTodo = ({children, loading}) => {
    const rChildren = Children.toArray(children);
    const clone = cloneElement('');
  return (
    <header className='spikes'>
      {
       clone(rChildren[0], {loading})
      }
    </header>
  )
}

export  { HeaderTodo }