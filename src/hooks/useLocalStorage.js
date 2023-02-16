
import { useState, useEffect } from 'react';

 const useLocalStorage = (itemName, startValue) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [item, setItem] = useState(startValue);
    const [sincronizedItem, setSincronizedItem] = useState(true)
    
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
                setSincronizedItem(true);
               } catch (error) {
                    setError(error)
               }
        },3000)
    },[sincronizedItem]);
 
    const saveItem = (newItem) =>{
        try {
            const stringTodos = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringTodos);
            setItem(newItem);
        } catch (error) {
            setError(error)
        }
    };
    const sincronizeItem = ()=>{
        setLoading(true);
        setSincronizedItem(false);
    }
  
    return  {item, saveItem, loading, error, sincronizeItem}
}

export {useLocalStorage}