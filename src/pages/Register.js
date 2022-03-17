import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div>
        
        <h1>Register Player baru</h1>
        <form action="/players" method="post">
          
          <label for= "username"> Username </label>
          <input type="text" placeholder="Enter Username" name="username" required></input>
          <label for= "email"> Email </label>
          <input type="text" placeholder="Enter Email" name="email" required></input>
          <label for= "username"> Password </label>
          <input type="password" placeholder="Enter Password" name="password" required></input>

          <button type="submit">Submit</button>  
        </form>
      </div>
    );
  }
}

export default Register;