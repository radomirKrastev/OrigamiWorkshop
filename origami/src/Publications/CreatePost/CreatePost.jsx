import React from "react";
import "./CreatePost.css";
import Posts from "../Posts/Posts";

function CreatePost() {
  return (
    <div className="Input">
      <div>
        <h1>Share your thoughts...</h1>
        <textarea></textarea>
        <button>Post</button>
      </div>
      <div>
        <h2>Last 3 post on yout wall</h2>
        <Posts limit={3}></Posts>
      </div>
    </div>
  );
}

export default CreatePost;
