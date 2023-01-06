import { useSelector } from 'react-redux';
import TodoListItem from './TodoListItem';

function TodoList() {
  const list = useSelector((state) => state.todoListReducer.list);
  console.log(list);
  return (
    <div className="todo-list">
      {list.map((item) => {
        return (
          <TodoListItem
            key={item.dateTime}
            content={item.content}
            dateTime={item.dateTime}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
