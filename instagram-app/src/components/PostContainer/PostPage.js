import React, { Component } from 'react';
import Fuse from "fuse.js";

import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

import dummyData from '../../dummy-data';

import './PostPage.css';


class PostPage extends Component {
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

  refreshDataObj = (event) => {
    this.setState({
      dataObjs: dummyData
    })

    event.target.classList.add('fa-spin');

    setTimeout(() => {
      document.querySelector('.fa-sync-alt').classList.remove('fa-spin');
    }, 2000);
  }

  componentDidMount() {
    this.setState({
      dataObjs: dummyData
    })
  }

  render() {

    const postContainer = this.state.dataObjs.map((data) => {
      return <PostContainer key={data.id} data={data} />
    });

    return (
      <>
        <SearchBar
          onSubmit={this.submitHandler}
          onClick={this.refreshDataObj}
        />
        <section className="postPage-container">
          <div className="PostContainer">
            {postContainer}
          </div>
        </section>
      </>
    );
  }
}

// PostPage.propTypes = {
//   data: PropTypes.shape({
//     thumbnailUrl: PropTypes.string.isRequired,
//     username: PropTypes.string.isRequired,
//     imageUrl: PropTypes.string.isRequired,
//     likes: PropTypes.number.isRequired,
//     comments: PropTypes.array.isRequired
//   })
// }

export default PostPage;
