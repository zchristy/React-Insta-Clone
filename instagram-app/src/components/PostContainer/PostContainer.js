import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './PostContainer.css';

import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends Component {

  submitHandler = (event) => {
    event.preventDefault();
    // this.setState({
    //   dataObjs: {
    //     [...comments], event.target.querySelector('input').value
    //   }
    // });
    console.log(event.target.querySelector('input').value);
    event.target.reset();
  }

  render() {
    const { data } = this.props;

    const commentSection = data.comments.map((comment, i) => {
      return <CommentSection key={i} comment={comment} />
    });
    console.log(data);
    return (
        <section className="post">
          <div className="user">
            <img className="img-thumbnail" src={data.thumbnailUrl} alt="User thumbnail"/>
            <div className="username" >{data.username}</div>
          </div>
          <div className="post-img">
            <img src={data.imageUrl} alt="User's post image" />
          </div>
          <div className="bottom-content">
            <div className="btns">
              <i className="far fa-heart btn-icon"></i>
              <i className="far fa-comment btn-icon"></i>
            </div>
            <div className="likes">
              {data.likes} likes
            </div>
            <section className="comments-container">
              {commentSection}
            </section>
            <div className="time">
              {moment().fromNow()}
            </div>
            <section className="add-comment">
              <form onSubmit={this.submitHandler}>
                <input id='comment' type="text"  placeholder='Add a comment...' />
              </form>
            </section>
          </div>
        </section>
    );
  }
}

PostContainer.propTypes = {
  data: PropTypes.shape({
    thumbnailUrl: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
  })
}

export default PostContainer;
