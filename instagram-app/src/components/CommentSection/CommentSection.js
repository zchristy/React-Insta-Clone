import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

class CommentSection extends Component {
  render() {
    const { comment } = this.props;
    return (
      <div className="CommentSection">
        <div className="comment-username">
          {comment.username}
          <span className="comment-text">
            {comment.text}
          </span>
        </div>
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
