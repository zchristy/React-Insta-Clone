import React, { Component } from 'react';
import withAuthenticate from './authentication/withAuthenticate';
import './App.css';

import PostPage from './components/PostContainer/PostPage';
import LoginPage from './components/LoginPage/LoginPage';

const ComponentFromWithAuthenticate = withAuthenticate(LoginPage)(PostPage);

class App extends Component {

  render() {

    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
