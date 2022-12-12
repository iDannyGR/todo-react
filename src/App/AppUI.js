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
      searchTodo
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