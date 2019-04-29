import React, { Component } from 'react';
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

export default CommentSection;
