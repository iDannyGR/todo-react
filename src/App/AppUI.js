import React from 'react';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoCounter } from '../components/TodoCounter';
import { TodoItem } from '../components/TodoItem';
import { TodoList } from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';

const AppUI = ({
      completedTodos,
      totalTodo,
      search,
      setsearch,
      finishedTodo,
      deleteTodo,
      searchTodo,
      loading,
      error
}) => {
  return (
    <>
        <TodoCounter 
        completed={completedTodos} 
        total={totalTodo} 
        />
        <TodoSearch 
            search={search} 
            setsearch={setsearch} 
        />
        <TodoList>
          {error && <p>Error en Carga</p>}
          {loading && <p>Cargando datos</p>}
          { (!loading && !searchTodo.length) && <p>Añade tu primer Todo-s</p>}

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
        <CreateTodoButton />
  
    </>
  )
};

export  { AppUI }