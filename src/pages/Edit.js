import React, { Component } from "react";

class Edit extends Component {
  render() {
    return (
      <div>
        <h1>Edit Player</h1>
        <form action="/players" method="post">
          <label for= "username"> Username </label>
          <input type="text" placeholder="Enter Username" name="username" required></input>
          <label for= "email"> Email </label>
          <input type="text" placeholder="Enter Email" name="email" required></input>
          <label for= "username"> Password </label>
          <input type="password" placeholder="Enter Password" name="password" required></input>
          <label for= "username"> Experience </label>
          <input type="experience" placeholder="Enter experience" name="experience" required></input>
          <label for= "lvl"> Level </label>
          <input type="password" placeholder="Enter lvl" name="lvl" required></input>

          <button type="submit">Submit</button>  
        </form>
      </div>
    );
  }
}

export default Edit;