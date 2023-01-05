import React, {useContext, useState} from 'react';
import { TodoContext } from '../../Context/TodoContext';
import './TodoForm.css';

const TodoForm = () => {
    const [newTodoValue, setNewTodoValue] = useState('')
    const {addTodo} = useContext(TodoContext);
    const onSubmit = (e)=>{
        e.preventDefault();
        addTodo()
    };
    const onCancel = () => {
        console.log('cancelar');
    };
    const onAdd = ()=>{
        console.log('Añadida');
    };

  return (
    <form onSubmit={onSubmit}>
            <label htmlFor=""> no sabemos que va aca</label>
            <textarea 
            value={newTodovalue}
                name="" 
                id="" 
                cols="35" 
                rows="8"
                className='todoForm__textArea'
                placeholder='Igresa tarea' />
            <div className='todoForm'>
                <button
                onClick={onCancel}
                className='btn todoForm__btn-cancel'
                >Cancelar</button>
                <button
                onClick={onAdd}
                className='btn todoForm__btn-add'
                >Añadir</button>
            </div>
    </form>
  )
}

export  {TodoForm}