import React from 'react';
import './css/TodoSearch.css';

const TodoSearch = ({search, setsearch}) => {
  
    const onSearchValueChange=(event)=>{
        setsearch(event.target.value)
    };
    console.log(search)
  return (
    <input type="text" 
    placeholder='Search Item' 
    className='TodoSearch'
    onChange={onSearchValueChange}
    />
  )
}

export  {TodoSearch}