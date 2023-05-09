import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: string; onDeleteTodo: (event: React.MouseEvent) => void }> = (props) => {
  return (
    <li onClick={props.onDeleteTodo} className={classes.item}>
      {props.text}
    </li>
  );
};

export { TodoItem };
