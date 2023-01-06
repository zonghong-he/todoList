import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoListReducer from '../slice/todoListSlice';

const reducer = combineReducers({ todoListReducer });

const store = configureStore({
  reducer: reducer,
  middleware: (getCurrentMiddleware) => {
    return getCurrentMiddleware();
  },
});

export default store;
