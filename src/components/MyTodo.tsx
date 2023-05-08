import { useRef } from "react";
import classes from "./MyTodo.module.css";

const MyTodo: React.FC<{ addTodo: (text: string) => void }> = (props) => {
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
    props.addTodo(enteredText);
  };
  //<HTMLFormElement>, HTMLFormElement>
  //<HTMLInputElement>, HTMLInputElement>
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
