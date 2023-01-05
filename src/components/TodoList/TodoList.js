import TodoListItem from "./TodoListItem";

function TodoList(){
  return(
    <div className="todo-list">
      <TodoListItem/>
      <TodoListItem/>
      <TodoListItem/>
      <TodoListItem/>
      <TodoListItem/>
    </div>
  )
}

export default TodoList;