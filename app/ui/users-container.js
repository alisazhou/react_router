import React from 'react';

import Users from './users';
import {getUsers} from 'api/user';


export default class UsersContainer extends React.Component {
  constructor () {
    super();
    this.state = { users: [] };
    getUsers().then(response => {
      this.setState({users: response.data});
    }).catch(
      err => {console.error(err);}
    );
  }

  render () {
    return (<Users users={this.state.users} />);
  }
}
