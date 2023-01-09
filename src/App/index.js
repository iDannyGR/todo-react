
import './index.css';
import { AppUI } from './AppUI';
import { TodoProvider } from '../Context/TodoContext';
import React, {useState} from 'react';


const App = () => {
   const [first, setfirst] = useState('estado compartido');
  return (
    <>
      <TodoHeader>
      <TodoCounter />
      <TodoSearch />
      </TodoHeader>
      <TodoList>
          <TodoItem state={first} />
      </TodoList>
    </>
  )
}
const TodoHeader = ({children}) => {
  return (
    <header>
      {children}
    </header>
  )
}
const TodoList = ({children}) => {
  return (
      <section className='TodoList-container'>
            {children}
      </section>
  )
}
const TodoCounter = () => {
    return <p>TodoCounter</p>
}
const TodoSearch = () => {
  return  <p>TodoSearch</p>
}
const TodoItem = ({state}) => {
  return  <p>{state}</p>
}
// const App = () => {
//   return (
//     <>
//     <TodoProvider>
//       <AppUI />
//     </TodoProvider>
//     </>
//   );
//   }
export default App