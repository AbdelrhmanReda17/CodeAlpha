import axios from 'axios';
const API = axios.create({baseURL : 'http://localhost:5000/' })

export const getMainBlogs = () => API.get(`/blogs/`);
export const createBlog = (formData) => API.post(`/blogs/`, formData);
export const updateBlog = (formData) => API.post(`/blogs/update`, formData);
export const deleteBlog = (formData) => API.delete(`/blogs/${formData._id}`);
export const getBlog = (id) => API.get(`/blogs/single-blog/${id}`);
export const getAuthor = (id) => API.get(`/blogs/author/${id}`);
export const getBlogs = (page,type , userId,searchText) => API.get(`/blogs/${type}?page=${page}&userId=${userId}&searchText=${searchText}`);
export const signIn = (formData) => API.post(`/auth/signin/` , formData);
export const signUp = (formData) => API.post(`/auth/signup/` , formData);
