import Todos from "./components/Todos";
import {Todo,Todo2} from "./models/todos";
function App() {
  const todos = [
    new Todo("리액트 타입스크립트 시연텍스트"),
    new Todo("new와 this 문법을 다시 공부해야겠네 기억이안나 쏘리쏘리~"),
  ]
  const todos2 =[
    new Todo2("선생님 숙제 요구사항이 이게 맞나요?"),
    new Todo2("아닐거같긴한데 일단은 했습니다?"),
  ]
  return (
    <div className="App">
      <Todos items={todos} items2={todos2}/>
    </div>
  );
}

export default App;
