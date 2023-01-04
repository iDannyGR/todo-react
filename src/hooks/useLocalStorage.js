
import { useState, useEffect } from 'react';

 const useLocalStorage = (itemName, startValue) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [item, setItem] = useState(startValue);
    
    useEffect(() => {
        setTimeout(()=>{
            try {
                const localStorageItem= localStorage.getItem(itemName);
                let parsedItem;
                
                
                if(!localStorageItem) { 
                    localStorage.setItem(itemName,JSON.stringify(startValue));
                    parsedItem=startValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                };   
                setItem(parsedItem);  
                setLoading(false);
               } catch (error) {
                    setError(error)
               }
        },3000)
    },[]);
 
    const saveItem = (newItem) =>{
        try {
            const stringTodos = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringTodos);
            setItem(newItem);
        } catch (error) {
            setError(error)
        }
    };
   
  
    return  {item, saveItem, loading, error}
}

export {useLocalStorage}