import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/register" className="btn btn-primary">Register</Link>
        <Link to="/search" className="btn btn-primary">Search</Link>
        <Link to="/edit" className="btn btn-primary">Edit</Link>
      </div>
    );
  }
}

export default Home;