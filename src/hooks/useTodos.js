import { useState } from 'react'; 
import { useLocalStorage } from './useLocalStorage';

const  useTodos = () => {
  const {item:todos,
         saveItem:saveTodos,
         loading, 
         error, 
         sincronizeItem:sincronizeTodos
  } = useLocalStorage('TODOS_V2',[]);
  
  const [search, setsearch] = useState('');
  const completedTodos = todos.filter(todo=> todo.completed).length;
  //  doble admiracion es para validar si es true
  const totalTodos = todos.length;

  let searchTodo = [];

  const generarId = (longitud) => {
    const caracteres =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";

    for (let i = 0; i < longitud; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      id += caracteres.charAt(indiceAleatorio);
    }

    return id;
  };

   (!search.length >= 1 ) ? //if no equal of mayor to 1
    searchTodo = [...todos] :
    searchTodo = todos.filter(todo => {
     return todo.text.toLowerCase().includes(search.toLowerCase() );
    });

    const finishedTodo =  (id)=>{
      const index = todos.findIndex(todo => todo.id === id);
      const newTodos = [...todos];
      newTodos[index].completed = !newTodos[index].completed;
      saveTodos(newTodos);
    };

    const addTodo =  (text)=>{
      const id = generarId(8);
      const newTodos = [...todos];
      newTodos.push({text, completed:false, id}) 
      saveTodos(newTodos);
    };

    const deleteTodo =  (id)=>{
      const index = todos.findIndex(todo => todo.id === id);
      const newTodos = [...todos];
      newTodos.splice(index,1);
      saveTodos(newTodos);
    };
    const findTodo =  (id)=>{
      const index = todos.findIndex(todo => todo.id === id);
      return todos[index];
    };

    const editTodo =  (id, text)=>{
      const index = todos.findIndex(todo => todo.id === id);
      const newTodos = [...todos];
      newTodos[index].text = text;
      saveTodos(newTodos);
    };

    const states = {
      completedTodos,
      totalTodos,
      search,
      searchTodo,
      loading,
      error,
      findTodo
    };

    const updater = {
      setsearch,
      finishedTodo,
      deleteTodo,
      editTodo,
      addTodo,
      sincronizeTodos,
    };
    return{ 
      states, updater
    };


  };
  
export { useTodos };