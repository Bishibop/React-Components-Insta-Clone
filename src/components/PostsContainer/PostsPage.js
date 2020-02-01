//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  const posts = props.posts.map(post =>
    <Post post={post}/>
  )

  return (
    <div className="posts-container-wrapper">
      {posts}
    </div>
  );
};

export default PostsPage;

