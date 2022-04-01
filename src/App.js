import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      Welcome to Rumana's Routing Website
      <Routes>

    <Route path="/" element={<Home/>}></Route>
    <Route path="/friends" element={<Friends/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path='*' element={<NotFound></NotFound>}></Route>


      </Routes>
    </div>
  );
}

export default App;
