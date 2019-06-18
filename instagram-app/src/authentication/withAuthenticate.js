import React, { Component } from 'react';

const withAuthenticate = NonAuthComp => AuthComp => class extends Component {
  constructor(){
    super();

    this.state = {
      isLoggedIn: false
    }
  }

  componentDidMount() {
    if(localStorage.getItem('user')) {
      this.setState({
        isLoggedIn: true
      });
    } else {
      this.setState({
        isLoggedIn: false
      });
    }
  }

  render() {
    return this.state.isLoggedIn ? <AuthComp /> : <NonAuthComp />
  }
}

export default withAuthenticate;
