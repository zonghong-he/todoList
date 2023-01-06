import { useDispatch } from 'react-redux';
import { toggoleFinish } from '../../slice/todoListSlice';

function TodoListItem({content,isFinish,dateTime}) {
  const dispatch = useDispatch()
  const handleToggleFinsishState = (key)=>{
    dispatch(toggoleFinish(key))
  }
  return (
    <div className="item">
      <input
        type="checkbox"
        checked={isFinish}
        onChange={()=>{
          handleToggleFinsishState(dateTime)
        }}
      />
      <p className={isFinish ? 'finish' : ''}>{content}</p>
      <button className="delete-btn">
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
}

export default TodoListItem;
