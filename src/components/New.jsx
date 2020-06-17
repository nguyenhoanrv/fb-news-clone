import React, { Component } from 'react';
import './New.css'
class New extends Component {
  render() {
    return (
      <div className="new">
        <div className="user">
          <div className="avatar"></div>
          <div className="user-name">Hoàn</div>
        </div>
        <div className="content-post">
          <p className="content-post_status">{ this.props.status }</p>
          <img src={ this.props.image } alt="" />
        </div>
      </div>
    );
  }
}

export default New; 