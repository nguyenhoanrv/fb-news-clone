import React, { Component } from 'react'
import './App.css';

import Navbar from './components/Navbar'
import News from './components/News'
import 'font-awesome/css/font-awesome.min.css'
import { connectData } from './firebaseConnect'
export default class App extends Component {
  state = {
    dataNews: []
  }

  addPost = (news) => {
    const dataNews = this.state.dataNews
    dataNews.unshift(news)
    this.setState({
      dataNews: dataNews
    })
    connectData.push(news)
    console.log(this.state.dataNews);

  }
  componentDidMount() {
    connectData.on('value', snapshot => {
      const dataNewsObj = snapshot.val();
      const dataNewsList = Object.keys(dataNewsObj).map(key => ({
        ...dataNewsObj[key],
        _id: key
      }));
      this.setState({
        dataNews: dataNewsList.reverse()
      })
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