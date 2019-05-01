import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';

import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: this.props.data.likes
    }
  }

  clickhandler = (event) => {
     event.preventDefault();

     this.state.likes === this.props.data.likes + 1 ? this.setState({ likes: this.state.likes - 1 }) : this.setState({ likes: this.state.likes + 1 })

     event.target.classList.toggle('clicked-heart');

  }

  render() {
    const { data } = this.props;

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
              <CommentSection comments={data.comments} />
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
    comments: PropTypes.array.isRequired
  })
}

export default PostContainer;
