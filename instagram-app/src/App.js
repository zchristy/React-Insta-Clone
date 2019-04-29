import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';

import dummyData from './dummy-data';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = dummyData;
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer />
        <CommentSection />
      </div>
    );
  }
}

export default App;
