import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './CommentSection.css';

class CommentSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: this.props.comments
    }
  }

  submitHandler = (event) => {
    event.preventDefault();

    const newComment = {
      id: Date.now(),
      username: 'unknown',
      text: event.target.querySelector('input').value
    }
    const addComment = [...this.state.comments].concat(newComment);

    this.setState({
        comments: addComment
      });

    event.target.reset();
  }

  deleteHandler = (event) => {
    event.preventDefault();

    const deletedArr = this.state.comments.filter(comment => {
      return comment.id.toString() !== event.target.getAttribute('name');
    });

    this.setState({
      comments: deletedArr
    });

  }

  render() {

    const comments = this.state.comments.map(comment => {
      return  (
        <div key={comment.id} className="comment-content">
          <div className="comment-username">
            {comment.username}
            <span className="comment-text">
              {comment.text}
            </span>
          </div>
          <span name={comment.id} id="delete" onClick={this.deleteHandler}>X</span>
        </div>
      )
    });

    return (
      <div className="CommentSection">
        {comments}
        <div className="time">
          {moment().fromNow()}
        </div>
        <section className="add-comment">
          <form onSubmit={this.submitHandler}>
            <input id='comment'  type="text"  placeholder='Add a comment...' />
          </form>
        </section>
      </div>
    );
  }
}

CommentSection.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
}

export default CommentSection;
