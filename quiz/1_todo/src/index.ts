let TodoItems1: {id: number, title: string, done: boolean}[];
type TodoItem2 = { id: number, title: string, done: boolean };
interface TodoItem3 {
  id: number;
  title: string;
  done: boolean;
}
class TodoItem {
  id: number;
  title: string;
  done: boolean;
  constructor(id: number, title: string, done: boolean) {
    this.id = id;
    this.title = title;
    this.done = done;
  }
}



let todoItems: Array<TodoItem>;

// api
function fetchTodoItems() {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos() {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: TodoItem) {
  todoItems.push(todo);
}

function deleteTodo(index: number) {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: TodoItem) {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo() {
  return todoItems[0];
}

function showCompleted() {
  console.log("성공한 아이템만 출력합니다");
  return todoItems.filter(item => item.done).forEach(item => console.log(item));
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems() {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  const item1 = { id: 4, title: '헬로', done: false }
  const item2 = { id: 5, title: '월드', done: false }
  addTodo(item1);
  addTodo(item2);
}

function addTodoList(items: Array<TodoItem>) {
  items.forEach((item) => {
    addTodo(item)
  });
}

// NOTE: 유틸 함수
function log() {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
const items = [
  { id: 10, title: '안녕', done: false },
  { id: 20, title: '타입', done: true },
  { id: 30, title: '스크립트', done: false },
];
addTodoList(items);
log();
showCompleted();
