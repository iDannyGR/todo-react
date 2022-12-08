import React from 'react';
import './css/TodoSearch.css';

const TodoSearch = () => {
     const [search, setsearch] = useState() ;
    const onSearchValueChange=(event)=>{
        console.log(event.target.value);
    };
  return (
    <input type="text" 
    placeholder='Search Item' 
    className='TodoSearch'
    onChange={onSearchValueChange}
    />
  )
}

export  {TodoSearch}