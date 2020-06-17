import React, { Component } from 'react';
import './PopupPost.css'

const shortid = require('shortid');
class PopupPost extends Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef()
    this.myRef1 = React.createRef()
  }
  state = {
    file: []
  }
  _onChange = () => {
    var file = this.myRef.current.files[0]
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function () {
      this.setState({
        imgSrc: [reader.result],
        content: ""
      })

    }.bind(this);

  }

  autosize = () => {
    var el = this.myRef1.current;
    setTimeout(function () {
      el.style.cssText = 'height:auto; padding:0';
      // for box-sizing other than "content-box" use:
      // el.style.cssText = '-moz-box-sizing:content-box';
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 0);
    return
  }

  removeImage = () => {
    this.myRef.current.files = null;
    this.setState({
      status: "",
      imgSrc: null
    })
  }

  checkImg = () => {
    if (this.state.imgSrc) {
      return <div className="preview-image">
        <div className="svg-close" onClick={ () => this.removeImage() }>
          <svg width="20px" height="20px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" className="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
        </div>
        <img src={ this.state.imgSrc } alt="" />
      </div>
    }
    else return
  }

  handleInput = (e) => {
    this.setState({
      status: e.target.value
    })
  }

  handleButton = () => {
    if (this.state.imgSrc || this.state.status) {
      return < button type="submit" className="hople" onClick={ this.handleSubmit }> Đăng</button >
    }
    return <button type="submit">Đăng</button>
  }
  handleSubmit = () => {
    const news = {
      id: shortid.generate(),
      status: this.state.status,
      image: this.state.imgSrc
    };
    this.props.addPost(news)
    console.log(news)
    this.props.togglePopup()
  }
  render() {
    console.log(this.state.imgSrc)
    return (

      <div className="popup">
        <div className="popup-layout"></div>
        <div className="popup_post" >
          <div className="title">
            <h2>Tạo bài viết</h2>
            <i className="fa fa-times" aria-hidden="true" onClick={ this.props.togglePopup }></i>
          </div>
          <div className="content">

            <div className="profile">
              <div className="avatar"></div>
              <div className="name">Hoan</div>
            </div>

            <div className="input">
              <textarea autoFocus placeholder="Hoàn ơi, bạn đang nghĩ gì thế?" rows="3" ref={ this.myRef1 } onKeyDown={ this.autosize } onChange={ (e) => this.handleInput(e) }></textarea>
            </div>
            { this.checkImg() }
            <div className="option">
              <div className="tieude">Thêm vào bài viêt</div>
              <div className="icons">
                <div className="add_image">
                  <label htmlFor="postImage" className="icon">
                    <input
                      id="postImage"
                      type="file"
                      ref={ this.myRef }
                      multiple={ true }
                      onChange={ () => this._onChange() } />
                  </label>
                </div>

                <div className="icon tag"></div>
                <div className="icon vitri"></div>
                <div className="icon camxuc"></div>
                <div className='icon anhsvg'>
                  <svg width="15px" height="15px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-h" className="svg-inline--fa fa-ellipsis-h fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg>
                </div>
              </div>
            </div>
            { this.handleButton() }
          </div>
        </div >
      </div>


    );
  }
}

export default PopupPost;





