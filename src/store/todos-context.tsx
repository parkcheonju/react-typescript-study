/* 자주쓰는 속성, 함수, 값을 정의 */
import React, { useState } from "react";
import Todo from "../models/todos";

type Props={
  children: React.ReactNode;
}

const TodoContext = React.createContext<{ items: Todo[]; deleteTodo: (id: string) => void; addTodo: (text: string) => void }>({
  items: [],
  addTodo: () => {},
  deleteTodo: (id: string) => {},
});

export const TodosContextProvider: React.FC<Props> = ({children}) => {
  let [todo, setTodo] = useState<Todo[]>([]);
  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodo((prevTodo) => {
      // return prevTodo.concat(newTodo); 스프레드 연산자
      return [...prevTodo, newTodo];
    });
  };
  const delTodoHandler = (todoId: string) => {
    setTodo((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== todoId);
    });
  };
  //contextValue는 컴포넌트에게 context의 변화 값을
  const constextValue = {
    items: todo,
    addTodo: addTodoHandler,
    deleteTodo: delTodoHandler,
  };


  return <TodoContext.Provider value={constextValue}>{children}</TodoContext.Provider>;
};

export default TodoContext;
