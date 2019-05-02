import React, { Component } from 'react';
import './LoginPage.css';

class LoginPage extends Component {

  login = event => {
    event.preventDefault();
    localStorage.setItem('user', 'user');
    localStorage.setItem('password', 'password');
    document.location.reload();
  }

  render() {

    return (
      <div className="LoginPage">
        <form onSubmit={this.login}>
          <input type='text'/>
          <input type='text'/>
        </form>
        <button onClick={this.login}>Submit</button>
      </div>
    );
  }
}

export default LoginPage;
