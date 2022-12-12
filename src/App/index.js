import {useState} from 'react';
import './index.css';
import { AppUI } from './AppUI';
const example = [
  {text:'cut onion', completed:false},
  {text:'take course intro react', completed:false},
  {text:'cry', completed:false},
  {text:'try cry', completed:false},
]
const App = () => {
  const [todos, setTodos] = useState(example);
  const [search, setsearch] = useState('');

  const completedTodos = todos.filter(todo=> todo.completed).length;
  //  doble admiracion es para validar si es true
  const totalTodos = todos.length;

  let searchTodo = [];

   (!search.length >= 1 ) ? //if no equal of mayor to 1
    searchTodo = [...todos] :
    searchTodo = todos.filter(todo => {
     return todo.text.toLowerCase().includes(search.toLowerCase() );
    }) ;

    const finishedTodo =  (title)=>{
      const index = todos.findIndex(todo => todo.text === title);
      const newTodos = [...todos];
      newTodos[index].completed = true;
      setTodos(newTodos);
    };

    const deleteTodo =  (title)=>{
      const index = todos.findIndex(todo => todo.text === title);
      const newTodos = [...todos];
      newTodos.splice(index,1);
      setTodos(newTodos);
    };
  


  return (
    <>
    <AppUI 
      completedTodos={completedTodos} 
      totalTodo={totalTodos}
      search={search} 
      setsearch={setsearch}
      finishedTodo = {finishedTodo}
      deleteTodo = {deleteTodo}
      searchTodo = {searchTodo}
    />
    </>
  );
  }
export default App