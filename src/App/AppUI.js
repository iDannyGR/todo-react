import {useContext} from 'react';
import  {Lottie} from 'lottie-react';
import {DocEdit} from './56-document-outline.json';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoCounter } from '../components/TodoCounter';
import { TodoContext } from '../Context/TodoContext';
import { TodoItem } from '../components/TodoItem';
import { TodoList } from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';
import { Modal } from '../components/Modal';
import { TodoForm } from '../components/TodoForm';


const AppUI = () => {
   const {error,loading,finishedTodo,deleteTodo,searchTodo, openModal, setOpenModal} = useContext(TodoContext);

  return (
    <>
        <TodoCounter/>
        <TodoSearch />     
             <TodoList>
             {error && <p>Error en Carga</p>}
             {loading && new Array(5).fill(1).map((a, i) => <TodoItem key={i} />)}
             {(!loading && !searchTodo.length) && <Lottie animationData={DocEdit} loop={true} />}
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