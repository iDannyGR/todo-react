import React from 'react'
const todos = [
  {text:'cut onion', completed:false},
  {text:'take course intro react', completed:false},
  {text:'cry', completed:false},
]
const App = () => {
  return (
    <>
    <TodoCounter />
    <h2>Has completado 2 de 3 TODOs</h2>
    <TodoSearch />
    <input placeholder='Cebolla'/>
    <TodoList>
    {todos.map(todo => (
    <TodoItem />
    ))}
    </TodoList>
    <CreateTodoButton />
    <button>+</button>
    </>
  );
  }
export default App