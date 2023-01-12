import React from 'react';
import './TodoList.css'

const TodoList = (props) => {
  return (
    <section className='Todolist-container'>
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
      {(!!props.totalTodos && !props.searchTodo.length) && props.onEmptySearchResults(props.search)}
   
        <ul>
            {props.searchTodo.map(props.render || props.children)}
        </ul>
    </section>
  )
}

export {TodoList}