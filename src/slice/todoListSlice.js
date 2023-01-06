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
      console.log("set");
    },
  },
});

export const { addTodo, toggoleFinish, deleteTodo, setScrolltoBottomFalse } =
  todoListSlice.actions;
export default todoListSlice.reducer;
