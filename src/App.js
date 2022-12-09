import React,{useState} from 'react';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
const example = [
  {text:'cut onion', completed:true},
  {text:'take course intro react', completed:false},
  {text:'cry', completed:false},
  {text:'try cry', completed:false},
]
const App = () => {
  const [todos, setTodos] = useState(example);
  const [search, setsearch] = useState('');

  const completedTodo = todos.filter(todo=> todo.completed).length;
  //  doble admiracion es para validar si es true
  const totalTodos = todos.length;

  let searchTodo = [];

   (!search.length >= 1 ) ? 
    searchTodo = todos :
    searchTodo = todos.filter(todo => {
     return todo.text.toLowerCase().includes(search.toLowerCase() );
    }) ;
    
  return (
    <>
      <TodoCounter 
        completed={completedTodo} 
        total={totalTodos} 
      />
      <TodoSearch search={search} setsearch={setsearch} />
      <TodoList>
      {searchTodo.map(todo => (
      <TodoItem 
        completed={todo.completed} 
        key={todo.text} 
        text = {todo.text} />
      ))}
      </TodoList>
      <CreateTodoButton />
    
  </>
  );
  }
export default App