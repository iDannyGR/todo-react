
import { useState } from 'react';

export const useLocalStorage = (itemName, startValue) => {
   const localStorageItem= localStorage.getItem(itemName);
    let parsedItem;
    
    
    if(!localStorageItem) { 
        localStorage.setItem('TODOS_V1',JSON.stringify(startValue));
        parsedItem=[];
    } else {
        parsedItem = JSON.parse(localStorageItem);
    };

    const [item, setItem] = useState(parsedItem);
    
    const saveItem = (newItem) =>{
        const stringTodos = JSON.stringify(newItem);
        localStorage.setItem('itemName', stringTodos);
        setItem(newItem);
    };
   
    
    return  [item, saveItem]
}

