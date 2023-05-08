import { useState } from "react";
import Todo from "./models/todos";
import Todos from "./components/Todos";
import MyTodo from "./components/MyTodo";

function App() {
  let [todo, setTodo] = useState<Todo[]>([]);
  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodo((prevTodo) => {
      // return prevTodo.concat(newTodo); 스프레드 연산자
      return [...prevTodo,newTodo];
    });
  };
  return (
    <div className="App">
      <MyTodo addTodo={addTodoHandler} />
      <Todos items={todo} />
    </div>
  );
}

export default App;
