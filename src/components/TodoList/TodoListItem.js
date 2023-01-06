import { useState } from 'react';

function TodoListItem({content,isCheck,dateTime}) {
  return (
    <div className="item">
      <input
        type="checkbox"
        checked={isCheck}
        onChange={() => {
          
        }}
      />
      <p className={isCheck ? 'finish' : ''}>{content}</p>
      <button className="delete-btn">
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
}

export default TodoListItem;
