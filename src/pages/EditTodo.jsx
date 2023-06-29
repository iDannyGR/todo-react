import React from 'react';
import { TodoForm } from '../components/TodoForm';
import "../assets/newTodo.css";
import { useTodos } from '../hooks/useTodos';
import { useParams,  useLocation } from 'react-router-dom';

const EditTodo = () => {

 const { updater, states } = useTodos()
 const { state } = useLocation()
 const { id } = useParams()
  let textVar; 

      if(state && state.todo){
        textVar = state.todo.text
          }
      else if (states.loading){
        return <p className='loading'>cargando ...</p>
      } else{
      textVar = states.findTodo(id).text;
          }
 return (
   <div className="Todo">
     <TodoForm
       submitEvent={(newText) => updater.editTodo(id, newText)}
       typeButton={"Guardar"}
       title={"Cambia tu Tarea"}
       defaultText={textVar}
     />
   </div>
 );
}

export default EditTodo