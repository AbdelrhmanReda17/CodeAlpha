import * as api from './api';
import { endLoading, startLoading } from './appSlice';
import { addMainBlogs , addBlog , addRelatedBlogs , addBlogs , updateBlogs , addAuthor} from './blogsSlice';

export const createBlog = (projectData) => {
    return async (dispatch) => {
      try{
        dispatch(startLoading());
        const { data } = await api.createBlog(projectData);
        dispatch(addBlog(data));
        dispatch(endLoading());
      }
      catch(error){
        console.log(error);
      }
    };
}
export const getBlog = (id) => {
  return async (dispatch) => {
    try{
      dispatch(startLoading());
      const { data } = await api.getBlog(id);
      dispatch(addBlog(data));
      dispatch(addRelatedBlogs(data));
      dispatch(endLoading());
    }
    catch(error){
      console.log(error);
    }
  };
}
export const getBlogs = (page , type = null , userId = null , searchText = null ) => {
  return async (dispatch) => {
    try{
      dispatch(startLoading());
      const { data } = await api.getBlogs(page,type , userId, searchText);
      dispatch(addBlogs(data));
      dispatch(endLoading());
    }
    catch(error){
      console.log(error);
    }
  };
}
export const deleteBlog = (page , blogData ) => {
  return async (dispatch) => {
    try{
      dispatch(startLoading());
      await api.deleteBlog(blogData);
      const { data } = await api.getBlogs(page,null , blogData.userId._id , null);
      dispatch(addBlogs(data));
      dispatch(endLoading());
    }
    catch(error){
      console.log(error);
    }
  };
}
export const updateBlog = ( blogData ) => {
  return async (dispatch) => {
    try{
      dispatch(startLoading());
      const { data } = await api.updateBlog(blogData);
      dispatch(updateBlogs(data));
      dispatch(endLoading());
    }
    catch(error){
      console.log(error);
    }
  };
}
export const getAuthor = ( id ) => {
  return async (dispatch) => {
    try{
      const { data } = await api.getAuthor(id);
      console.log(data);
      dispatch(addAuthor(data));
    }
    catch(error){
      console.log(error);
    }
  };
}

export const getMainBlogs = () => {
    return async (dispatch) => {
      try{
          dispatch(startLoading());
          const { data }  = await api.getMainBlogs();
          console.log(data);
          if (!data) {
            return;
          }
          dispatch(addMainBlogs(data));
          dispatch(endLoading());
      }catch(error){
        console.log(error);
      }
    };
}