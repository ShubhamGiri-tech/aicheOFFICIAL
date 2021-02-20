//jshint esversion:6
 
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
 
//mongoose.connect("",{ useUnifiedTopology: true,useNewUrlParser: true});

const app = express();
 

 
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.send("Hello")
    
  })

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}


 
app.listen(port, function() {
  console.log("Server started on port 3000");
})






 
/*const blogSchema = {
  title:{
    type: String,
    required: [true,"give a title"]
  },
  content:{
    type: String,
    required:[true,"add some content"]
  }
}
 
const Blog = mongoose.model("Blog",blogSchema);
 
app.get("/",(req,res)=>{
 
  Blog.find({},(err,posts)=>{
    if(!err){
      res.render("home",{
        homeStartingContent:homeStartingContent,
        posts:posts
      });
    }
  });
  
})
 

 
app.post("/compose",(req,res)=>{
    const postTitle =  req.body.newTitle;
    const postContent =  req.body.newPost;
    if(postTitle.length>0&&postContent.length>0){
      const blog = new Blog({
        title: postTitle,
        content: postContent
      });
      blog.save((err)=>{
        if(!err){
          res.redirect("/");
        }
      });
    }
    
  
})
 
app.get("/post/:postID",(req,res)=>{
  const postID = req.params.postID;
  
 
  Blog.findOne({_id:postID},(err,post)=>{
          res.render("post",{
            title: post.title,
            content: post.content
          })
        });
  
   
})
*/


 
