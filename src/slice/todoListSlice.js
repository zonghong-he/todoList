import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  scrollToBottom: false,
  sort: false,
};

function sortList(list, sort) {
  if (sort) {
    const finishList = list.filter((item) => item.isFinish);
    const todoList = list.filter((item) => !item.isFinish);
    return [...todoList, ...finishList];
  }

  const result = list.sort((pre, next) => {
    return pre.dateTime - next.dateTime;
  });
  return result;
}

export const todoListSlice = createSlice({
  name: 'listItem',
  initialState,
  reducers: {
    addTodo: (state, actions) => {
      const currentDate = new Date();
      const newItem = {
        content: actions.payload,
        dateTime: currentDate.getTime(),
        isFinish: false,
      };
      const newList = [...state.list, newItem];
      state.list = sortList(newList, state.sort);
      state.scrollToBottom = true;
    },
    toggoleFinish: (state, actions) => {
      const key = actions.payload;
      const newList = state.list.map((item) => {
        if (item.dateTime === key) {
          return { ...item, isFinish: !item.isFinish };
        }
        return item;
      });
      state.list = sortList(newList, state.sort);
    },
    deleteTodo: (state, actions) => {
      const key = actions.payload;
      const newList = state.list.filter((item) => {
        return item.dateTime !== key;
      });
      state.list = newList;
    },
    setScrolltoBottomFalse: (state, actions) => {
      state.scrollToBottom = false;
    },
    sortTodoList: (state, actions) => {
      state.sort = actions.payload;
      const newList = [...state.list];
      //sort == true 以是否完成排序 ，flase 以新增時間排序
      state.list = sortList(newList, state.sort);
    },
  },
});

export const {
  addTodo,
  toggoleFinish,
  deleteTodo,
  setScrolltoBottomFalse,
  sortTodoList,
} = todoListSlice.actions;
export default todoListSlice.reducer;
