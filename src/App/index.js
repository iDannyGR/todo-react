import React from 'react';
import './index.css';
import Lottie from "lottie-react";
import { useTodos } from "../hooks/useTodos";
import todoAni from "../Lottie/56-document-outline.json";
import notFount from "../Lottie/96247-notfound.json";
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoItem } from '../components/TodoItem';
import { TodoList } from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';
import { Modal } from '../components/Modal';
import { TodoForm } from '../components/TodoForm';
import { TodoCounter } from '../components/TodoCounter';
import { HeaderTodo } from '../components/HeaderTodo';
import {TodoLoading} from '../components/TodoLoading';
import {TodoError} from '../components/TodoError';
import {ChangeAlert} from '../components/ChangeAlert';



const App = () => {
  const {
    error,
    loading,
    finishedTodo,
    deleteTodo,
    search,
    searchTodo,
    openModal,
    setOpenModal,
    setsearch,
    completedTodos, 
    totalTodos,
    addTodo,
    sincronizeTodos} = useTodos();
    return (
      <>
          <HeaderTodo loading={loading}>
            <TodoCounter 
              completedTodos={completedTodos} 
              totalTodos={totalTodos}
              />    
          <TodoSearch 
            setsearch={setsearch} 
            /> 
          </HeaderTodo>

          <TodoList
            error={error} 
            loading={loading}
            searchTodo={searchTodo}
            totalTodos={totalTodos}
            search={search}
            onError={()=> <TodoError />}
            onLoading={()=> <TodoLoading />}
            onEmptyTodos={()=> <Lottie animationData={todoAni} loop={true}  style={{ height: '300px', width: '300px', margin:'25% auto'  }} />}
            onEmptySearchResults={(searchText)=> <p>not result to {searchText}</p> && <Lottie animationData={notFount} loop={true} speed={3} />}
            // render= { todo => (
            //   <TodoItem 
            //               completed={todo.completed} 
            //               key={todo.text} 
            //               text = {todo.text} 
            //               onComplete={()=> finishedTodo(todo.text)}
            //               onDelete = {()=> deleteTodo(todo.text)}
            //         />
            // )}
            >
            { todo =>(
              <TodoItem 
                    key={todo.text} 
                    completed={todo.completed} 
                    text = {todo.text} 
                    onComplete={()=> finishedTodo(todo.text)}
                    onDelete = {()=> deleteTodo(todo.text)}
              />
            )}
            </TodoList>                   

          {!!openModal && (
              <Modal>
                < TodoForm addTodo={addTodo} setOpenModal={setOpenModal}/>
              </Modal>
                )}
          <CreateTodoButton 
              setOpenModal={setOpenModal} openModal={openModal}
          />
          <ChangeAlert 
            sincronize ={sincronizeTodos} 
            />
      </>
    )
  };
export  { App }