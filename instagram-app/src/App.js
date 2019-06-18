import React, { Component } from 'react';
import Fuse from "fuse.js";
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();

    this.state = {
      dataObjs: []
    };
  }

  submitHandler = (event) => {
    event.preventDefault();

    //Fuse.js logic
    let options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "username"
      ]
    };
    let fuse = new Fuse(this.state.dataObjs, options);
    let result = fuse.search(event.target.querySelector('#search').value);

    this.setState({
        dataObjs: result
    });

    event.target.reset();
  }

  resetDataObj = (event) => {
    this.setState({
      dataObjs: dummyData
    })
  }

  componentDidMount() {
    this.setState({
      dataObjs: dummyData
    })
  }

  render() {
    const postContainer = this.state.dataObjs.map((data, i) => {
      return <PostContainer key={i} data={data} />
    });

    return (
      <div className="App">
        <SearchBar
          onChange={this.handleChange}
          onSubmit={this.submitHandler}
          onClick={this.resetDataObj}
        />
        <div className="PostContainer">
          {postContainer}
        </div>
      </div>
    );
  }
}

export default App;
