import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div>
        <h1>Mencari Player</h1>
        <h2>Berdasar ID</h2>
        <form action="/players/id" method="get">
          <label for= "id"> ID </label>
          <input type="text" placeholder="Enter id" name="id" required></input>
          <button type="submit">Submit</button>  
        </form>
        <h2>Berdasar Username</h2>
        <form action="/players/username" method="get">
          <label for= "experience"> Username </label>
          <input type="text" placeholder="Enter Username" name="username" required></input>
          <button type="submit">Submit</button>  
        </form>
        <h2>Berdasar experience</h2>
        <form action="/players/experience" method="get">
          <label for= "experience"> EXP </label>
          <input type="text" placeholder="Enter experience" name="experience" required></input>
          <button type="submit">Submit</button>  
        </form>
        <h2>Berdasar level</h2>
        <form action="/players/lvl" method="post">
          <label for= "lvl"> Level </label>
          <input type="text" placeholder="Enter lvl" name="lvl" required></input>
          <button type="submit">Submit</button>  
        </form>
      </div>
    );
  }
}

export default Search;