import AddItem from './components/AddItem/AddItem';
import Header from './components/Header/Header';
import ProgressBar from './components/ProgressBar/ProgressBar';
import SortBtn from './components/SortBtn/SortBtn';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <>
      <Header />
      <ProgressBar/>     
      <TodoList/> 
      <SortBtn/>
      <AddItem/>
    </>
  );
}

export default App;
