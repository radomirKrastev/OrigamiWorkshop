import React from "react";
import "./Post.css";

function Post({ ...props }) {
  const { content, author, children } = props;

  return (
    <div className="Post">
      <img src={children} alt="Origami"></img>
      <p className="description">{content}</p>
      <div>
        <span>
          <small>Author:</small>
          {author}
        </span>
      </div>
    </div>
  );
}

export default Post;
