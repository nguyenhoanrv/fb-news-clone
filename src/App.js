import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import News from './components/News'
import 'font-awesome/css/font-awesome.min.css'
import Data from './Data.json'
export default class App extends Component {
  state = {
    dataNews: Data.news
  }

  addPost = (news) => {
    const dataNews = this.state.dataNews
    Data.news.unshift(news)
    this.setState({
      dataNews: dataNews
    })
  }
  render() {
    return (
      <div className='App'>
        <Navbar />
        <News dataNews={ this.state.dataNews } addPost={ this.addPost } />
      </div>
    )
  }
}
