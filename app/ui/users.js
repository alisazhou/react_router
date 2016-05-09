import React from 'react';


export default class User extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div className="userspage">
        <h1>App: User</h1>
        <ul>
          {this.props.users.map((user, i) => {
            return (<li key={user.id}>{user.name}</li>);
          })}
        </ul>
      </div>
    );
  } 
}
