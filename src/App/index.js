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
  const {states, updater} = useTodos();
    return (
      //    error,
      // loading,
      // search,
      // searchTodo,
      // openModal,
      // completedTodos,
      // totalTodos,

      // finishedTodo,
      // deleteTodo,
      // setOpenModal,
      // setsearch,
      // addTodo,
      // sincronizeTodos
      <>
        <HeaderTodo loading={states.loading}>
          <TodoCounter
            completedTodos={states.completedTodos}
            totalTodos={states.totalTodos}
          />
          <TodoSearch setsearch={updater.setsearch} />
        </HeaderTodo>

        <TodoList
          error={states.error}
          loading={states.loading}
          searchTodo={states.searchTodo}
          totalTodos={states.totalTodos}
          search={states.search}
          onError={() => <TodoError />}
          onLoading={() => <TodoLoading />}
          onEmptyTodos={() => (
            <Lottie
              animationData={todoAni}
              loop={true}
              style={{ height: "300px", width: "300px", margin: "25% auto" }}
            />
          )}
          onEmptySearchResults={(searchText) =>
            <p>not result to {searchText}</p> && (
              <Lottie animationData={notFount} loop={true} speed={3} />
            )
          }
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
          {(todo) => (
            <TodoItem
              key={todo.text}
              completed={todo.completed}
              text={todo.text}
              onComplete={() => updater.finishedTodo(todo.text)}
              onDelete={() => updater.deleteTodo(todo.text)}
            />
          )}
        </TodoList>

        {!!states.openModal && (
          <Modal>
            <TodoForm
              addTodo={updater.addTodo}
              setOpenModal={updater.setOpenModal}
            />
          </Modal>
        )}
        <CreateTodoButton
          setOpenModal={updater.setOpenModal}
          openModal={states.openModal}
        />
        <ChangeAlert sincronize={updater.sincronizeTodos} />
      </>
    );
  };
export  { App }