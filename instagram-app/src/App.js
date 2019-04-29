import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

import dummyData from './dummy-data';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataObjs: dummyData
    };
  }

  render() {

    const postContainer = this.state.dataObjs.map((data, i) => {
      return <PostContainer key={i} data={data} />
    });
    return (
      <div className="App">
        <SearchBar />
        <div className="PostContainer">
          {postContainer}
        </div>
      </div>
    );
  }
}

export default App;
