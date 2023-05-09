import { useRef,useContext } from "react";
import TodoContext from "../store/todos-context"
import classes from "./MyTodo.module.css";

const MyTodo: React.FC = () => {
  const todoCtx=useContext(TodoContext);
  const todoTextInput = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    console.log(e);
    e.preventDefault();
    //const enteredText=todoTextInput.current?.value;
    const enteredText = todoTextInput.current!.value;
    console.log(enteredText);
    if (enteredText.trim().length === 0) {
      return;
    }
    todoCtx.addTodo(enteredText);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label className={classes.label} htmlFor="text">
        할일내용:
      </label>
      <input className={classes.input} type="text" id="text" ref={todoTextInput} />
      <button className={classes.button}>추가</button>
    </form>
  );
};
export default MyTodo;
