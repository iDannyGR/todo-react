import React from 'react';
import './index.css';
import Lottie from "lottie-react";
import { useTodos } from "../hooks/useTodos";
import todoAni from "../assets/56-document-outline.json";
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoItem } from '../components/TodoItem';
import { TodoList } from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';
import { Modal } from '../components/Modal';
import { TodoForm } from '../components/TodoForm';
import { TodoCounter } from '../components/TodoCounter';
import { HeaderTodo } from '../components/HeaderTodo';

const App = () => {
  const {
    error,
    loading,
    finishedTodo,
    deleteTodo,
    searchTodo,
    openModal,
    setOpenModal,
    setsearch,
    completedTodos, 
    totalTodos,
    addTodo} = useTodos();
    return (
      <>
          <HeaderTodo>
            <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos}/>    
          </HeaderTodo>
          <TodoSearch setsearch={setsearch} /> 
          <TodoList>
               {error && <p>Error en Carga</p>}
               {loading && new Array(5).fill(1).map((a, i) => <TodoItem key={i} />)}
               {(!loading && !searchTodo.length) && <Lottie animationData={todoAni} loop={true} />}
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
          {!!openModal && (
              <Modal>
                < TodoForm addTodo={addTodo} setOpenModal={setOpenModal}/>
              </Modal>
                )}
          <CreateTodoButton 
              setOpenModal={setOpenModal} openModal={openModal}
          />
      </>
    )
  };
export  { App }