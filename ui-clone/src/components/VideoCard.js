import React from "react";
import "./VideoCard.css";

function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <img
        src="https://www.allaboutbirds.org/news/wp-content/uploads/2020/07/STanager-Shapiro-ML.jpg?page=Search"
        alt=""
      />
      <p>This is a film about coding</p>
      <h2>Movie Title</h2>
      <p>Number of Likes...</p>
    </div>
  );
}

export default VideoCard;
