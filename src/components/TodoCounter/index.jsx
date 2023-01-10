import './TodoCounter.css'

const TodoCounter = ({completedTodos,totalTodos }) => {
  return (
  <header className='spikes'>
    <h2 className='TodoCounter'>Has completado {completedTodos}  de {totalTodos} TO-DO´s</h2>
  </header>
  )
}

export  {TodoCounter}

//se puede exportar de esa manera para obligarse a llamar las 
//variables tal como se exportan para evitar confusiones
// si se puede usar normal export default;