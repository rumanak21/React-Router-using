import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Posts from './components/Posts/Posts';
import PostDetail from './components/PostDetail/PostDetail';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/friends" element={<Friends />}></Route>
        <Route path="/friend/:friendId" element ={<FriendDetail/>}> </Route>
        <Route path="/posts" element={<Posts></Posts>}> <Route path=":postId" element={<PostDetail></PostDetail>}></Route> </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>


      </Routes>
    </div>
  );
}

export default App;
