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
    this.setState({
        comments: [...this.state.comments].concat({
                                              username: 'unknown',
                                              text: event.target.querySelector('input').value
                                            })
      });
    event.target.reset();
  }
  
  render() {

    const comments = this.state.comments.map((comment, i) => {
      return  (
        <div key={i} className="comment-content">
          <div className="comment-username">
            {comment.username}
            <span className="comment-text">
              {comment.text}
            </span>
          </div>
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
