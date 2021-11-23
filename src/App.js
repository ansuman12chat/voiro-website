import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages';
import ReqaDemoPage from './pages/ReqaDemo';

function App() {
  return (
    <Router >
      <Routes>
        <Route path='/' element = {<Home/>} exact/>
        <Route path='/reqademo' element = {<ReqaDemoPage/>} exact/>
      </Routes>
    </Router>
  );
}

export default App;
