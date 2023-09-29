import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  blogs: [{},{},{},{},{},{},{},{},{},{},{},{}],
  techBlogs: [{} , {} , {} , {}],
  artBlogs: [ {} , {} , {} , {}],
  healthBlogs:[ {} , {} , {} , {}],
  opinionBlogs:[{} , {} , {} , {}],
  relatedBlogs: [{},{},{},{}],
  Author: {},
  blog: [],
  numberOfBlogs: 0, 
  numberOfPages : 0,
  currentPage : 1,
};

export const blogsSlice = createSlice({
  name: 'blogsReducer',
  initialState,
  reducers: {
    addMainBlogs: (state ,action) => {
      state.techBlogs = action.payload.techBlogs;
      state.artBlogs = action.payload.artBlogs;
      state.healthBlogs = action.payload.healthBlogs;
      state.opinionBlogs = action.payload.opinionBlogs
    },
    addBlogs: (state ,action) => {
      state.blogs = action.payload.blogs
      state.numberOfBlogs = action.payload.numberOfBlogs
      state.numberOfPages = action.payload.numberOfPages
      state.currentPage = action.payload.currentPage
    },
    addAuthor: (state , action) => {
      state.Author = action.payload;
    },
    addBlog(state, action) {
      state.blog = action.payload.blog;
    },
    removeBlog: (state , action) => {
      state.blogs.filter(blogs => blogs._id !== action.payload._id)
    },
    addRelatedBlogs: (state , action) => {
      state.relatedBlogs = action.payload.relatedBlogs;
    },
    updateBlogs: (state, action) => {
      state.blogs = state.blogs.map(blog => blog._id === action.payload.blog._id  ? action.payload.blog : blog)
    },
  },
})

export const { addMainBlogs, addBlogs , addBlog, removeBlog , updateBlogs , addRelatedBlogs , addAuthor  } = blogsSlice.actions

export default blogsSlice.reducer