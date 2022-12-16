import { useState, useEffect } from 'react';
import './index.css';
import { AppUI } from './AppUI';
import { useLocalStorage } from '../hooks/useLocalStorage';

const App = () => {
  const {item:todos, saveItem:saveTodos, loading, error} = useLocalStorage('TODOS_V1',[]);
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
      saveTodos(newTodos);
    };

    const deleteTodo =  (title)=>{
      const index = todos.findIndex(todo => todo.text === title);
      const newTodos = [...todos];
      newTodos.splice(index,1);
      saveTodos(newTodos);
    };

    useEffect(() => {
      console.log('use effect');
    }, [totalTodos])
   
    


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
      loading={loading}
      error={error}
    />
    </>
  );
  }
export default App