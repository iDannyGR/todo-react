import React from 'react'
import { TodoForm } from '../components/TodoForm'
import '../assets/newTodo.css'

const NewTodo = () => {
  return (
    <div className="newTodo">
      <TodoForm />
    </div>
  );
}

export default NewTodo