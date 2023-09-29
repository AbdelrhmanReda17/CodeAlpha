import './App.css';
import { Home , AuthAndCreateBlog , Error, Blog , Blogs , Author } from './pages';
import { Navbar,Footer } from './components';
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {
  const [searchText , setSearchText] = useState(null);

  var user = JSON.parse(localStorage.getItem("auth"));
  useEffect(() => {
    user = JSON.parse(localStorage.getItem("auth"));
  }, [Navigate , user]);

  return (
    <>
        <BrowserRouter>
        <Navbar searchText={searchText} setSearchText={setSearchText} />
        <Routes>
          <Route path="/" exact element={ <Home />} />
          <Route path="/blogs/signle-blog/:id" exact element={ <Blog />} />
          <Route path="/blogs/:type" exact element={ <Blogs searchText={searchText} />} />
          <Route path="/user/blogs/:id" exact element={ <Author />} />
          <Route path="/login" exact element={ user ? <Navigate to='/'/> : <AuthAndCreateBlog type={'Login'}/> } />
          <Route path="/register" exact element={user ? <Navigate to='/'/> : <AuthAndCreateBlog type={'Register'}/>} />
          <Route path="/create" exact element={user ? <AuthAndCreateBlog type={'Create Blog'}/> : <Navigate to='/login' />} />
          <Route path="*" element={ <Error />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
