
import './index.css';
import { AppUI } from './AppUI';
import { TodoProvider } from '../Context/TodoContext';


const App = () => {
  return (
    <>
    <TodoProvider>
      <AppUI />
    </TodoProvider>
    </>
  );
  }
export default App