import React from 'react';
import {Link} from 'react-router';


export default class Home extends React.Component {
  render () {
    return (
      <div className="app">
        <nav>
          <Link to="/">Home</Link> 
          <Link to="/users">Users</Link> 
        </nav>
        <main>
          <h1>Users</h1>         
        </main>
      </div>
    );
  }
  
}
