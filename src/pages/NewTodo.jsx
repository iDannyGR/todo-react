import React from 'react'
import { TodoForm } from '../components/TodoForm'
import '../assets/newTodo.css'
import { useTodos } from '../hooks/useTodos'

const NewTodo = () => {
  const { updater } = useTodos();
  return (
    <div className="Todo">
      <TodoForm
        submitEvent={(text)=> updater.addTodo(text)}
        typeButton={"Añadir"}
        title={"Escribe una tarea nueva"}
      />
    </div>
  );
}

export default NewTodo