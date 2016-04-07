import React from 'react'
import { render } from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router'
import './app.css'
import AddVideo from './components/AddVideo'
import ViewVideo from './components/ViewVideo'

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li className="menu-tab"><Link to="/page1">熱門影片</Link></li>
          <li className="menu-tab"><Link to="/page2">精選影片</Link></li>
        </ul>
        <AddVideo />
        <ReactCSSTransitionGroup
          className="main-container"
          component="div"
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          })}
        </ReactCSSTransitionGroup>

      </div>
    )
  }
}


class Index extends React.Component {
  render() {
    return (
      <div className="Page">
        <h1>Index</h1>
        <p>Animations with React Router are not different than any other animation.</p>
      </div>
    )
  }
}

class Page1 extends React.Component {
  render() {
    const lists = [
      {
        embed: 'XYNQ297Z_-U',
        img: 'https://i.ytimg.com/vi/XYNQ297Z_-U/hqdefault.jpg?custom=true&w=320&h=180&stc=true&jpg444=true&jpgq=90&sp=68&sigh=a72iJQySoD5p4KrDjQ22kapn0oY',
        text: 'FOR The Rima'
      },{
        embed: 'D9ksLn6hZ7Q',
        img: 'https://i.ytimg.com/vi/D9ksLn6hZ7Q/hqdefault.jpg?custom=true&w=320&h=180&stc=true&jpg444=true&jpgq=90&sp=68&sigh=xxNS1gnuonwWjqQrPhC46KcUNtE',
        text: 'G.E.M.鄧紫棋 - 多遠都要在一起'
      },{
        embed: 'WD7eOgBp6UU',
        img: 'https://i.ytimg.com/vi/WD7eOgBp6UU/hqdefault.jpg?custom=true&w=320&h=180&stc=true&jpg444=true&jpgq=90&sp=68&sigh=Yik4w9phON0uIcDCDZsOAVvBym4',
        text: 'G.E.M.鄧紫棋 - 喜歡你'
      },{
        embed: 'XYNQ297Z_-U',
        img: 'https://i.ytimg.com/vi/XYNQ297Z_-U/hqdefault.jpg?custom=true&w=320&h=180&stc=true&jpg444=true&jpgq=90&sp=68&sigh=a72iJQySoD5p4KrDjQ22kapn0oY',
        text: 'FOR The Rima'
      },{
        embed: 'D9ksLn6hZ7Q',
        img: 'https://i.ytimg.com/vi/D9ksLn6hZ7Q/hqdefault.jpg?custom=true&w=320&h=180&stc=true&jpg444=true&jpgq=90&sp=68&sigh=xxNS1gnuonwWjqQrPhC46KcUNtE',
        text: 'G.E.M.鄧紫棋 - 多遠都要在一起'
      },{
        embed: 'WD7eOgBp6UU',
        img: 'https://i.ytimg.com/vi/WD7eOgBp6UU/hqdefault.jpg?custom=true&w=320&h=180&stc=true&jpg444=true&jpgq=90&sp=68&sigh=Yik4w9phON0uIcDCDZsOAVvBym4',
        text: 'G.E.M.鄧紫棋 - 喜歡你'
      }
    ]
    return (
      <div className="Page">
        <h1>熱門影片</h1>
        <ul className="lists">
          {lists.map((list, i) => (
            <li className="list" key={i}>
              <ViewVideo src={list.img} text={list.text} embed={list.embed} />
              <p>{list.text}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

class Page2 extends React.Component {
  render() {
    return (
      <div className="Page">
        <h1>Page 2</h1>
        <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    )
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="page1" component={Page1} />
      <Route path="page2" component={Page2} />
    </Route>
  </Router>
), document.getElementById('main'))
