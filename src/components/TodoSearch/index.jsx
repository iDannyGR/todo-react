import './TodoSearch.css';

const TodoSearch = ({setsearch}) => {
    const onSearchValueChange=(event)=>{
        setsearch(event.target.value)
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