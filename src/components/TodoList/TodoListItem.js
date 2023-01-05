import { useState } from 'react';

function TodoListItem() {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <div className="item">
      <input
        type="checkbox"
        checked={isCheck}
        onChange={() => {
          setIsCheck(!isCheck);
        }}
      />
      <p className={isCheck ? 'finish' : ''}>{'Test'}</p>
      <button className="delete-btn">
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
}

export default TodoListItem;
