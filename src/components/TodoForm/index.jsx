import React from 'react'

const TodoForm = () => {
    const onCancel = () => {
        console.log('cancelar');
    };
    const onAdd = ()=>{
        console.log('Añadida');
    };
  return (
    <form>
            <label htmlFor="">...</label>
            <textarea 
                name="" 
                id="" 
                cols="30" 
                rows="10"
                placeholder='Igresa tarea' />
            <div>
                <button
                onClick={onCancel}>Cancelar</button>
                <button
                onClick={onAdd}>Añadir</button>
            </div>
    </form>
  )
}

export  {TodoForm}