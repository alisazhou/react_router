import React from 'react';
import {Link} from 'react-router';


export default class App extends React.Component {
  render () {
    return (
      <div className="app">
        <nav>
          <Link to="/">Home</Link><br />
          <Link to="/widgets">Widgets</Link><br />
          <Link to="/users">Users</Link>
        </nav>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}
