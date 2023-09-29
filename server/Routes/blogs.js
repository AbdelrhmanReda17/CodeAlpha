const {
    getMainBlogs,
    getBlogs,
    createBlog,
    deleteBlog,
    updateBlog,
    getBlog,
    getAuthor,
} = require("../Controllers/blogs");
  
    
  const express =  require("express");
  
  const router = express.Router();
  
  
  router.get('/',  getMainBlogs);
  router.get('/single-blog/:id',  getBlog);
  router.get('/:type',  getBlogs);
  router.post('/',  createBlog);
  router.post('/update' , updateBlog);
  router.get('/author/:id' , getAuthor);
  router.delete('/:id' , deleteBlog);

  
  module.exports = router;
  