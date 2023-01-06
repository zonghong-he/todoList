import { useDispatch } from 'react-redux';
import { deleteTodo, toggoleFinish } from '../../slice/todoListSlice';

function TodoListItem({ content, isFinish, dateTime }) {
  const dispatch = useDispatch();
  const handleToggleFinsishState = (key) => {
    dispatch(toggoleFinish(key));
  };
  const handleDeleteTodo = (key) => {
    dispatch(deleteTodo(key));
  };

  return (
    <div className="item">
      <input
        type="checkbox"
        checked={isFinish}
        onChange={() => {
          handleToggleFinsishState(dateTime);
        }}
      />
      <p className={isFinish ? 'finish' : ''}>{content}</p>
      <button
        className="delete-btn"
        onClick={() => {
          handleDeleteTodo(dateTime);
        }}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
}

export default TodoListItem;
