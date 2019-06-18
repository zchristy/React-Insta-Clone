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

// ========== SEARCH ==========
  searchSubmitHandler = (event) => {
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

// ========== COMMENTS ==========
  commentSubmitHandler = (inputValue, id) => {

    const filteredObj = this.state.dataObjs.filter(data => {
      return data.id === id
    })

    let result = [];

    [...this.state.dataObjs].forEach(data => {
      if(data.id === filteredObj[0].id) {
        data.comments.push({
          id: Date.now(),
          username: localStorage.getItem('user'),
          text: inputValue});
          result.push(data);
      } else {
        result.push(data);
      }
    })

    this.setState({
        dataObjs: result
      });
  }

  commentDeleteHandler = (commentId, id) => {

    const filteredObj = this.state.dataObjs.filter(data => {
      return data.id === id
    })

    const deletedArr = filteredObj[0].comments.filter(comment => {
      return commentId !== comment.id.toString()
    })

    let results = [];

    [...this.state.dataObjs].forEach(data => {
      if(data.id === filteredObj[0].id) {
        data.comments = deletedArr;
        results.push(data);
      } else {
        results.push(data);
      }
    })

    this.setState({
      dataObjs: results
    });

  }

// ========== MOUNT ==========
  componentDidMount() {
    this.setState({
      dataObjs: dummyData
    })
  }

  render() {

    const postContainer = this.state.dataObjs.map((data) => {
      return <PostContainer
                key={data.id}
                data={data}
                onSubmit={this.commentSubmitHandler}
                onClick={this.commentDeleteHandler}
              />
    });

    return (
      <>
        <SearchBar
          onSubmit={this.searchSubmitHandler}
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
