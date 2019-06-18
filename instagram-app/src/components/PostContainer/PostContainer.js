import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './PostContainer.css';

import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      likes: []
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

  clickhandler = (event) => {
     event.preventDefault();

     if(this.state.likes === this.props.data.likes + 1) {
       console.log('first');
       this.setState({
         likes: this.state.likes - 1
       });
     } else {
      console.log('third');
      this.setState({
        likes: this.state.likes + 1
      });
    }

  }

  componentDidMount() {
    this.setState({
      comments: this.props.data.comments,
      likes: this.props.data.likes
    });
  }

  render() {
    const { data } = this.props;

    const commentSection = this.state.comments.map((comment, i) => {
      return <CommentSection key={i} comment={comment} />
    });

    return (
        <section className="post">
          <div className="user">
            <img className="img-thumbnail" src={data.thumbnailUrl} alt="User thumbnail"/>
            <div className="username" >{data.username}</div>
          </div>
          <div className="post-img">
            <img src={data.imageUrl} alt="User's post" />
          </div>
          <div className="bottom-content">
            <div className="btns">
              <i className="far fa-heart btn-icon" onClick={this.clickhandler}></i>
              <i className="far fa-comment btn-icon"></i>
            </div>
            <div className="likes">
              {this.state.likes} likes
            </div>
            <section className="comments-container">
              {commentSection}
            </section>
            <div className="time">
              {moment().fromNow()}
            </div>
            <section className="add-comment">
              <form onSubmit={this.submitHandler}>
                <input id='comment'  type="text"  placeholder='Add a comment...' />
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
