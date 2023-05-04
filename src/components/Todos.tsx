import { Todo, Todo2 } from "../models/todos";
// const Todos = (props:any) => {
// const Todos = (props: {items:string[],id:number[]}) => {
// const Todos: React.FC<{ items: string[];}> = (props) => {
const Todos: React.FC<{ items: Todo[]; items2: Todo2[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => {
        return <li key={item.id}>{item.text}</li>;
      })}
      {props.items2.map((item) => {
        return <li key={item.id2}>{item.text2}</li>;
      })}
    </ul>
  );
};
export default Todos;
