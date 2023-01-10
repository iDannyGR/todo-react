import './index.css';
import { AppUI } from './AppUI';
import { TodoProvider } from '../Context/TodoContext';
import React from 'react';

const App = () => {
  return (
    <>
    <TodoProvider>
      <AppUI />
    </TodoProvider>
    </>
  );
  }
export  { App }