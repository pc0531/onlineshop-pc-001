import React, { Component } from 'react';
import './App.css';
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { Router } from 'react-router-dom'
import { createBrowserHistory as createHistory } from 'history'
import Layout from './component/layout'

class App extends Component {
  static getEnhancer() {
    const h = createHistory({})
    const rawPush = h.push
    h.push = (...args) => {
      rawPush(...args)
      window.scrollTo(0, 0) // 切换页面的时候 滚动到头部
    }
    window.__routerHistory = h
    return h
  }

  constructor(props) {
    super(props)
    // store.dispatch(sync())
  }


  history = App.getEnhancer();

  render() {
    return (
      <Router history={this.history}>
        <Layout />
      </Router>
    );
  }
}

App = connect(state => state.appConfig)(App)

export default hot(module)(App)
