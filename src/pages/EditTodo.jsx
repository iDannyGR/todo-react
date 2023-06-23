import React from 'react';
import { TodoForm } from '../components/TodoForm';
import "../assets/newTodo.css";
import { useTodos } from '../hooks/useTodos';
import { useParams } from 'react-router-dom';

const EditTodo = () => {
 const { updater, states } = useTodos()
 const {id} = useParams()
const body = states.findTodo(id);
console.log(body)
  return (
    <div className="Todo">
      <TodoForm
        submitEvent={(newText)=> updater.editTodo(id, newText)}
        typeButton={"Editar"}
        title={"Cambia tu Tarea"}
        defaultText={body}
      />
    </div>
  );
}

export default EditTodo