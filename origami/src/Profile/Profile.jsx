import React from "react";
import "./Profile.css";
import Posts from "../Publications/Posts/Posts";

function Profile() {
  return (
    <div className="Profile">
      <img src="blue-origami-bird.png" alt="profile-icon"></img>
      <div className="personal-info">
        <p>
          <span>Email:</span>
          theEmailOfTheUser
        </p>
        <p>
          <span>Posts:</span>
          theNumberOfUserPosts
        </p>
      </div>
      <div>
        <h2>3 of your recent posts</h2>
        <Posts limit={3}></Posts>
      </div>
    </div>
  );
}

export default Profile;
