import React, { Component } from 'react';
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
    console.log('submitted');
    event.preventDefault();
    this.setState({
        dataObjs: this.state.dataObjs.filter(data => {
                                              return data.username === event.target.querySelector('#search').value
                                          })
      });
    event.target.reset();
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
        <SearchBar onSubmit={this.submitHandler} />
        <div className="PostContainer">
          {postContainer}
        </div>
      </div>
    );
  }
}

export default App;
