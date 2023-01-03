import {useContext} from 'react';
import { TodoContext } from '../../Context/TodoContext';
import './TodoCounter.css'

const TodoCounter = () => {
  const {completedTodos, totalTodos} = useContext(TodoContext)
  return (
    <h2 className='TodoCounter'>Has completado {completedTodos}  de {totalTodos} TO-DO´s</h2>
  )
}

export  {TodoCounter}

//se puede exportar de esa manera para obligarse a llamar las 
//variables tal como se exportan para evitar confusiones
// si se puede usar normal export default;