import {useContext} from 'react';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoCounter } from '../components/TodoCounter';
import { TodoContext } from '../Context/TodoContext';
import { TodoItem } from '../components/TodoItem';
import { TodoList } from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';

const AppUI = () => {
   const {error,loading,finishedTodo,deleteTodo,searchTodo} = useContext(TodoContext);
  return (
    <>
        <TodoCounter/>
        <TodoSearch />     
          {() => (
             <TodoList>
             {error && <p>Error en Carga</p>}
             {loading && <p>Cargando datos</p>}
             {(!loading && !searchTodo.length) && <p>Añade tu primer Todo-s</p>}
             {searchTodo.map(todo => (
                  <TodoItem 
                        completed={todo.completed} 
                        key={todo.text} 
                        text = {todo.text} 
                        onComplete={()=> finishedTodo(todo.text)}
                        onDelete = {()=> deleteTodo(todo.text)}
                  />
               ))}
           </TodoList>
          )};
        <CreateTodoButton />
    </>
  )
};

export  { AppUI }