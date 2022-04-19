import 'bootstrap/dist/js/bootstrap';
import { Routes, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import PostsList from './components/posts-list/PostsList';

function App() {
  return (
    <div className="App">
      <header className="App-header" >
        
      </header>
      <Routes>
        <Route path="/" element={<PostsList />} />
      </Routes>
      
    </div>
  );
}

export default App;
