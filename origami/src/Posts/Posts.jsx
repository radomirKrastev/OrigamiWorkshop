import React from "react";
import Post from "./Post/Post";
import "./Posts.css";
import postService from "../services/post-service";

// const posts = [
//   {
//     id: 1,
//     author: "Debeliq",
//     content:
//       "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   }
// ];

// const posts = postService.load;

class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: null
    };
  }

  componentDidMount() {
    postService.load().then((posts) => {
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
