class Todo {
  //constructor: 클래스 내의 객체를 생성하고 초기화 하기위한 메서드
  id: string;
  text: string;
  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}
class Todo2 {
  //constructor: 클래스 내의 객체를 생성하고 초기화 하기위한 메서드
  id2: string;
  text2: string;
  constructor(todoText2: string) {
    this.text2 = todoText2;
    this.id2 = new Date().toISOString();
  }
}


export {Todo,Todo2};


