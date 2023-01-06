import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  scrollToBottom: false,
};

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
      state.list = [...state.list, newItem];
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
      state.list = newList;
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
      const sort = actions.payload;
      const newList = [...state.list];
      //sort == true 以是否完成排序 ，flase 以新增時間排序
      if (sort) {
        const finishList = newList.filter((item) => item.isFinish);
        const todoList = newList.filter((item) => !item.isFinish);
        state.list = [...todoList, ...finishList];
      } else {
        const result = newList.sort((pre, next) => {
          return pre.dateTime - next.dateTime;
        });
        state.list = result;
      }
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
