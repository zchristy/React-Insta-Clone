import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

  render() {
    const { onSubmit } = this.props;
    return (
      <div className="container">
        <div className="header-container">
          <div className="logo-container">
            <i className="fab fa-instagram logo"></i>
            <span></span>
            <div className="instagram"></div>
          </div>
          <div className="searchBar">
            <form onSubmit={onSubmit}>
              <input id="search" placeholder="&#xF002; Search" />
            </form>
          </div>
          <div className="header-right">
            <i className="far fa-compass header-btns"></i>
            <i className="far fa-heart header-btns"></i>
            <i className="far fa-user header-btns"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
