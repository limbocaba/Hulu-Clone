import React from "react";
import "./Nav.css";
import requests from "../requests";

function Nav({ setSelectedOption}) {
  return (
    <div className="nav">
      <h2 onClick={() => setSelectedOption(requests.fetchTrending)}>Trending</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchTopRated)}>Top Rated</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchActionMovies)}>Action</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>Horror</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>Romance</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchMystery)}>Mystery</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchSciFI)}>Sci-fi</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchWestern)}>Western</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchAnimation)}>Animation</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchTv)}>TV</h2>
    </div>
  );
}

export default Nav;
