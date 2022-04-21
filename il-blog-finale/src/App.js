import 'bootstrap/dist/js/bootstrap';
import { Routes, Route, Link, Outlet } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import PostsList from './components/posts-list/PostsList';
import Navbar from './components/navbar/Navbar';
import Page from './components/page/Page';
import Categories from './components/categories/Categories';
import PostsByCategory from './components/posts-by-category/PostsByCategory';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/:slug" element={<Page />} />  

        <Route path="/categories" element={<Categories />} />  
        <Route path="/posts" element={<PostsByCategory />} />  
        <Route path="/categories/:categoryId/posts" element={<PostsByCategory />} /> 

      </Routes>
      
    </div>
  );
}

export default App;
