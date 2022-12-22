import { createContext } from 'react'; 
export const TodoContext = createContext();
import { useLocalStorage } from '../hooks/useLocalStorage';

function TodoProvider(props) {
    const {item:todos, saveItem:saveTodos, loading, error} = useLocalStorage('TODOS_V1',[]);
    const [search, setsearch] = useState('');
    
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
  
      const deleteTodo =  (title)=>{
        const index = todos.findIndex(todo => todo.text === title);
        const newTodos = [...todos];
        newTodos.splice(index,1);
        saveTodos(newTodos);
      };
  
      useEffect(() => {
        console.log('use effect');
      }, [totalTodos])
     
      
  
    return(
        <TodoContext.Provider value={{ 
            completedTodos,
            totalTodo,
            search ,
            setsearch,
            finishedTodo, 
            deleteTodo ,
            searchTodo ,
            loading,
            error,
        }}>
                    {props.children}
        </TodoContext.Provider>
    )
    
}