
import { useEffect, useReducer } from 'react';

 const useLocalStorage = (itemName, startValue) => {
  
  
  
    const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state;
  };

const initialState = {
  loading: true,
  error: false,
  item: startValue,
  sincronizedItem: true,
};
const actionTypes = {
  error: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
  syncronize: "SYNC",
};
const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    loading: false,
    sincronizedItem: true,
    item: payload,
    error: false,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.syncronize]: {
    ...state,
    loading: true,
    sincronizedItem: false,
  },
});


   const [state, dispatch] = useReducer(reducer, initialState);
   const { item, loading, error, sincronizedItem } = state;

   //ACTIONS CREATORS
   const onError = (error) => dispatch({ type: actionTypes.error, payload: error });
   const onSuccess = (Item) => dispatch({ type: actionTypes.success, payload:Item });
   const onSave = (Item) => dispatch({ type: actionTypes.save, payload:Item });
   const onSync = () => dispatch({ type: actionTypes.syncronize});

   useEffect(() => {
     setTimeout(() => {
       try {
         const localStorageItem = localStorage.getItem(itemName);
         let parsedItem;

         if (!localStorageItem) {
           localStorage.setItem(itemName, JSON.stringify(startValue));
           parsedItem = startValue;
         } else {
           parsedItem = JSON.parse(localStorageItem);
         }
         onSuccess(parsedItem)
       } catch (error) {
         onError(error);
       }
     }, 1000);
   }, [sincronizedItem]);

   const saveItem = (newItem) => {
     try {
       const stringTodos = JSON.stringify(newItem);
       localStorage.setItem(itemName, stringTodos);
        onSave(newItem)
     } catch (error) {
       onError(error);
     }
   };
   const sincronizeItem = () => {
     onSync();
   };

   return { item, saveItem, loading, error, sincronizeItem };
 }

export {useLocalStorage}