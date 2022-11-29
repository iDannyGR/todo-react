import React from 'react'
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
const todos = [
  {text:'cut onion', completed:false},
  {text:'take course intro react', completed:false},
  {text:'cry', completed:false},
]
const App = () => {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
      {todos.map(todo => (
      <TodoItem key={todo.text} text = {todo.text} />
      ))}
      </TodoList>
      <CreateTodoButton />
    
  </>
  );
  }
export default App