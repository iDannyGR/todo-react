import {useContext} from 'react';
import Lottie from "lottie-react";
import todoAni from "../assets/56-document-outline.json";
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoContext } from '../Context/TodoContext';
import { TodoItem } from '../components/TodoItem';
import { TodoList } from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';
import { Modal } from '../components/Modal';
import { TodoForm } from '../components/TodoForm';
import { HeaderTodo } from '../components/HeaderTodo';


const AppUI = () => {
   const {error,loading,finishedTodo,deleteTodo,searchTodo, openModal, setOpenModal} = useContext(TodoContext);

  return (
    <>
        <HeaderTodo />
        <TodoSearch />     
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
                  < TodoForm />
             </Modal>
              )}
        <CreateTodoButton 
            setOpenModal={setOpenModal} openModal={openModal}
        />
    </>
  )
};

export  { AppUI }