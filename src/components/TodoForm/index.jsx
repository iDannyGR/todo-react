import React, {useState} from 'react';
import './TodoForm.css';

const TodoForm = ({addTodo, setOpenModal}) => {
    const [newTodoValue, setNewTodoValue] = useState('')
    const onSubmit = (e)=>{
        e.preventDefault();
        newTodoValue === '' ? alert('valor incorrecto') :
         addTodo(newTodoValue);
         setOpenModal(false);
    };
    const onCancel = () => {
        setOpenModal(false);
    };
    const onAdd = ()=>{
        console.log('Añadida');
    };
    const onChange = (e)=>{
        setNewTodoValue(e.target.value);   
    }
  return (
    <form onSubmit={onSubmit}>
            <label htmlFor=""> Ingresa tu Tarea </label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                name="" 
                id="" 
                cols="35" 
                rows="8"
                className='todoForm__textArea'
                placeholder='Ingresa tarea' />
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