import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../slice/todoListSlice';

function AddItem() {
  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const handleAddTodo = (content) => {
    dispatch(addTodo(content));
  };
  return (
    <div className="addItem-wrap">
      <p>Add to list</p>
      <form>
        <input
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <button className="add-btn" onClick={e=>{
          e.preventDefault()
          if(!content)return
          
          handleAddTodo(content)
          setContent("")
        }}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    </div>
  );
}

export default AddItem;
