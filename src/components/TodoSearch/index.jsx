import {useContext} from 'react';
import './TodoSearch.css';
import { TodoContext } from '../../Context/TodoContext';
const TodoSearch = () => {
    const {search, setsearch} = useContext(TodoContext)
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