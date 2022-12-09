import React from 'react';
import './css/TodoCounter.css'

const TodoCounter = ({total, completed}) => {

  return (
    <h2 className='TodoCounter'>Has completado {completed}  de {total} TO-DO´s</h2>
  )
}

export  {TodoCounter}

//se puede exportar de esa manera para obligarse a llamar las 
//variables tal como se exportan para evitar confusiones
// si se puede usar normal export default;