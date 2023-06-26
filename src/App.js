
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import ListTaskComponent from './components/ListTaskComponent';
import Header from './components/Header';
import Footer from './components/Footer';
import AddTask from './components/AddTask';

function App() {
  return (
    <div>
      <Router>
      <Header/>
        <Routes>
          <Route path='/' Component={ListTaskComponent}></Route>
          <Route path='/findAll' Component={ListTaskComponent}></Route>
          <Route path='/add-task' Component={AddTask}></Route>
          <Route path='/update-task/:id' Component={AddTask}></Route>
        
        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
