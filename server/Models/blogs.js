const mongoose = require("mongoose");

// Define the product schema

const comment = new mongoose.Schema({
    userId: {
        type : mongoose.Schema.Types.ObjectId,
        required : true ,
        ref:"User"
    },
    content: {
        type : String,
    }
},{
    timestamps: true
})

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  field: { type: [String], required: true },
  userId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true ,
        ref:"User"
    },
    comments : {
        type : [comment]
  }
}, {
  timestamps: true, 
});

const BlogsDB = mongoose.model("blogs", blogSchema);

module.exports = BlogsDB;
