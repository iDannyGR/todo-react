import React from 'react'
import './TodoSearch.css';
import { useNavigate } from 'react-router-dom';

const TodoSearch = ({ setsearch,searchValue, loading, params }) => {
  
  const navigate = useNavigate()

  const onSearchValueChange = (event) => {
    setsearch(event.target.value);
  
  }

  const handleKeyDowm=(e)=>{
    if(e.key === "Enter"){
      navigate(`/?search=${e.target.value}`);
    }
  }

  React.useEffect(() => {
  const searchtext = params.get("search");
    setsearch(searchtext)
  }, [params])
  

  return (
    <input
      type="text"
      value={searchValue}
      placeholder="Search Item"
      className="TodoSearch"
      onChange={onSearchValueChange}
      onKeyDown={handleKeyDowm}
      disabled={loading}
    />
  );
};

export  {TodoSearch}