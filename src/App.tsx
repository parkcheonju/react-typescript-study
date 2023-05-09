import Todos from "./components/Todos";
import MyTodo from "./components/MyTodo";
import {TodosContextProvider} from "./store/todos-context"
function App() {
  return (
    <div className="App">
      <TodosContextProvider>
        <MyTodo/>
        <Todos/>
      </TodosContextProvider>
    </div>
  );
}

export default App;
