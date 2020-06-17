import React, { Component } from 'react';
import './News.css'
import PopupPost from './PopupPost'
import New from './New'
class News extends Component {
  state = {
    showPopup: false
  }
  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    })
    console.log("ok")
  }
  render() {
    const dataNews = this.props.dataNews
    return (
      <div className="home">
        <div className="post-new">
          <div className="avatar"></div>
          <div className="cauhoi" onClick={ this.togglePopup }>Hoàn ơi bạn đang nghĩ gì thế?</div>
        </div>
        { dataNews.map((tin, i) => <New image={ tin.image } status={ tin.status } key={ i } />) }
        { this.state.showPopup ? <PopupPost togglePopup={ () => this.togglePopup() } addPost={ this.props.addPost } /> : null }
      </div>
    );
  }
}

export default News;