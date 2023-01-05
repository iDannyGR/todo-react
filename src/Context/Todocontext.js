import { createContext,useState } from 'react'; 
import { useLocalStorage } from '../hooks/useLocalStorage';
const TodoContext = createContext();

function TodoProvider(props) {
    const {item:todos, saveItem:saveTodos, loading, error} = useLocalStorage('TODOS_V1',[]);
    const [search, setsearch] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const completedTodos = todos.filter(todo=> todo.completed).length;
    //  doble admiracion es para validar si es true
    const totalTodos = todos.length;
  
    let searchTodo = [];
  
     (!search.length >= 1 ) ? //if no equal of mayor to 1
      searchTodo = [...todos] :
      searchTodo = todos.filter(todo => {
       return todo.text.toLowerCase().includes(search.toLowerCase() );
      }) ;

      const finishedTodo =  (title)=>{
        const index = todos.findIndex(todo => todo.text === title);
        const newTodos = [...todos];
        newTodos[index].completed = true;
        saveTodos(newTodos);
      };
  
      const addTodo =  (text)=>{
        const newTodos = [...todos];
        newTodos.push({text, completed:false}) 
        saveTodos(newTodos);
      };
  
      const deleteTodo =  (title)=>{
        const index = todos.findIndex(todo => todo.text === title);
        const newTodos = [...todos];
        newTodos.splice(index,1);
        saveTodos(newTodos);
      };
  
      // useEffect(() => {
      //   console.log('use effect');
      // }, [totalTodos])
     
      
  
    return(
        <TodoContext.Provider value={{ 
            completedTodos,
            totalTodos,
            search,
            setsearch,
            finishedTodo, 
            deleteTodo,
            addTodo,
            searchTodo,
            loading,
            error,
            openModal,
            setOpenModal
        }}>
          {props.children}
        </TodoContext.Provider>
    )
    
}

export {TodoProvider, TodoContext}