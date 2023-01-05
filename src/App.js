import { useState } from 'react';
import Header from './components/Header/Header';
import ProgressBar from './components/ProgressBar/ProgressBar';
import logo from './logo.svg';

function App() {
  return (
    <>
      <Header />
      <ProgressBar progressPercent={0}/>      
    </>
  );
}

export default App;
