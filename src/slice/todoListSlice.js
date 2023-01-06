import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
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
      console.log(state.list);
    },
  },
});

export const { addTodo } = todoListSlice.actions;
export default todoListSlice.reducer;
