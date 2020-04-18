import React from "react";
import Post from "./Post/Post";
import "./Posts.css";
import postService from "../../services/post-service";

class Posts extends React.Component {
  state = {
    posts: null
  };

  componentDidMount() {
    postService.load(this.props.limit).then((posts) => {
      this.setState({ posts });
    });
  }

  renderPosts = (posts) => {
    return posts.map((post) => {
      return (
        <Post key={post.id} {...post}>
          {"blue-origami-bird.png"}
        </Post>
      );
    });
  };

  render() {
    return (
      <div className="Posts">
        {this.state.posts ? this.renderPosts(this.state.posts) : <div>Loading...</div>}
      </div>
    );
  }
}

export default Posts;
