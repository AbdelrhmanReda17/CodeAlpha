const { default: mongoose } = require("mongoose");
const BlogsDB = require("../Models/blogs");
const UserModel = require('../Models/user');

const createBlog = async (req, res) => {
    const {title , description , field , userId} = req.body; 
    const NewBlog = new BlogsDB({title , description , img : req.file.path , field , userId});
    try {
      await NewBlog.save();    
      res.status(200).json({ blog: NewBlog });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
};


const getMainBlogs = async (req, res) => {
    try {
        const desiredFields = ['Technology', 'Art & Culture', 'Health', 'Opinion'];
        const blogResults = {};
        
        for (const field of desiredFields) {
          const blogs = await BlogsDB.find({ field: { $in: [field] } }).limit(4).populate('userId').populate({ path: 'comments', populate: { path: 'userId' } });
          blogResults[field] = blogs;
        }
        const techBlogs = blogResults['Technology'];
        const artBlogs = blogResults['Art & Culture'];
        const healthBlogs = blogResults['Health'];
        const opinionBlogs = blogResults['Opinion'];
        res.status(200).json({ techBlogs , artBlogs , healthBlogs , opinionBlogs });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


const getBlogs = async (req, res) => {
    const { type } = req.params;
    const { page, userId , searchText } = req.query ;
    const LIMIT = 12;
    const SKIP = (page - 1) * LIMIT;
    let query = {};
    if (type !== 'all' && type !== 'null' && searchText === 'null') {
      let newType = type.charAt(0).toUpperCase() + type.slice(1);
      if(newType === 'Artsandculture'){
        newType = 'Art & Culture';
      }
      query = { field: { $in: [newType] } };
    }else if (type === 'null' && searchText === 'null' ){
        query = { userId : userId }
    }else if(type === 'search' && searchText !== 'null'){ 
        query = { title: { $regex: searchText, $options: 'i' } };
    }
    try {
        const TOTAL = await BlogsDB.countDocuments(query);
        const blogs = await BlogsDB.find(query).limit(LIMIT).skip(SKIP).populate('userId').populate({ path: 'comments', populate: { path: 'userId' } });
        res.status(200).json({ blogs , numberOfPages: Math.ceil(TOTAL / LIMIT) , currentPage : page , numberOfBlogs : TOTAL });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const deleteBlog = async (req, res) => {
    const { id } = req.params;
    try {
        await BlogsDB.deleteOne({ _id : id});
        res.status(200).json({ message: "Blog deleted" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateBlog = async (req, res) => {
    const body = req.body;    
    try {
      const existingProject = await BlogsDB.findOne( { _id : body._id});
  
      if (!existingProject) {
        return res.status(404).json({ message: "Blog not found" });
      }
  
      Object.assign(existingProject, body);
      await existingProject.save();
  
      res.status(200).json({ blog: existingProject });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

const getAuthor= async (req, res) => {
    const { id } = req.params;
    if(mongoose.Types.ObjectId.isValid(id) === false) {
        return res.status(404).json({ message: "Invalid ID" });
    }
    try {
        const TOTAL = await BlogsDB.countDocuments({ userId : id });
        const user = await UserModel.findOne({ _id : id});
        res.status(200).json({ user , TotalBlogs : TOTAL });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
const getBlog = async (req, res) => {
    const { id } = req.params;
    if(mongoose.Types.ObjectId.isValid(id) === false) {
        return res.status(404).json({ message: "Invalid ID" });
    }
    try {
        const blog = await BlogsDB.findOne({ _id: id }).populate('userId').populate({ path: 'comments', populate: { path: 'userId' } });
        var relatedBlogs = await BlogsDB.find({
            field: { $in: blog.field },
            _id: { $ne: id }, 
          }).limit(4).populate('userId').populate({ path: 'comments', populate: { path: 'userId' } });
        res.status(200).json({ blog , relatedBlogs });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
module.exports = {
    createBlog,
    getMainBlogs,
    getBlogs,
    deleteBlog,
    updateBlog,
    getBlog,
    getAuthor
}