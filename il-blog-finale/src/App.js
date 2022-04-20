import 'bootstrap/dist/js/bootstrap';
import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import PostsList from './components/posts-list/PostsList';
import Navbar from './components/navbar/Navbar';
import Page from './components/page/Page';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/:slug" element={<Page />} />
      </Routes>
      
    </div>
  );
}

export default App;
