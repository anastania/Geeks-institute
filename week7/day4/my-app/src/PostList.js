import React from "react";
import posts from "./data/posts.json";

const PostList = () => {
  return (
    <div className="container mt-3">
      <h2>Posts</h2>
      {posts.map(post => (
        <div key={post.id} className="card mb-2">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.content}</p>
            <small className="text-muted">{post.date}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
