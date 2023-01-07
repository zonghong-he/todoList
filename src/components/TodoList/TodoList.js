import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setScrolltoBottomFalse } from '../../slice/todoListSlice';
import TodoListItem from './TodoListItem';

function TodoList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todoListReducer);
  const list = state.list;
  const isScroll = state.scrollToBottom;
  const components = useRef(null);

  useEffect(() => {
    //isScroll狀態為true時移至底部
    if (!isScroll) return;
    components.current.scrollTo({
      top: components.current.scrollHeight,
      behavior: 'smooth',
    });
    dispatch(setScrolltoBottomFalse());
  }, [components, isScroll, dispatch]);

  return (
    <div className="todo-list" ref={components}>
      {list.map((item) => {
        return (
          <TodoListItem
            key={item.dateTime}
            content={item.content}
            dateTime={item.dateTime}
            isFinish={item.isFinish}
          />
        );
      })}
      <div className="hidden"></div>
    </div>
  );
}

export default TodoList;
