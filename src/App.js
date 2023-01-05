import { useState } from 'react';
import Header from './components/Header/Header';
import ProgressBar from './components/ProgressBar/ProgressBar';
import SortBtn from './components/SortBtn/SortBtn';
import TodoList from './components/TodoList/TodoList';
import logo from './logo.svg';

function App() {
  return (
    <>
      <Header />
      <ProgressBar progressPercent={0}/>     
      <TodoList/> 
      <SortBtn/>
    </>
  );
}

export default App;
