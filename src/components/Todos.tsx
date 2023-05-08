import React from "react";
import Todo from "../models/todos";
import { TodoItem } from "./TodoItem";
import classes from "./Todos.module.css";
// const Todos = (props:any) => {
// const Todos = (props: {items:string[],id:number[]}) => {
// const Todos: React.FC<{ items: string[];}> = (props) => {
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={classes.item}>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};
export default Todos;
