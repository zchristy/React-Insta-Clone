import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './CommentSection.css';

class CommentSection extends Component {

  submit = event => {
    event.preventDefault();

    const value = event.target.querySelector('#comment').value;
    const id = this.props.data.id;
    this.props.onSubmit(value, id);

    event.target.reset();
  }

  delete = event => {
    event.preventDefault();

    const commentId = event.target.getAttribute('name');
    const id = this.props.data.id;
    this.props.onClick(commentId, id);
  }

  render() {

    const { data, onClick } = this.props;

    const comments = data.comments.map(comment => {
        return  (
          <div key={comment.id} className="comment-content">
            <div className="comment-username">
              {comment.username}
              <span className="comment-text">
                {comment.text}
              </span>
            </div>
            <span name={comment.id} id="delete" onClick={this.delete}>X</span>
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
          <form onSubmit={this.submit}>
            <input userid={data.id} id='comment'  type="text"  placeholder='Add a comment...' />
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
