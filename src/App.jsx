import React from 'react'
import { render } from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router'
import './app.css'

import AddVideo from './components/AddVideo';
import configureStore from './store';
import {Provider, connect} from 'react-redux';
import {fetchData} from './actions';
import ViewVideo from './components/ViewVideo'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let {dispatch} = this.props;
    dispatch(fetchData());
  }

  render() {
    return (
      <div>
        <div className="breadcrumbs">
          <h1><Link to="/">行車紀錄器分享平台</Link></h1>
          <AddVideo />
        </div>
        <div>
          <ul>
            <li className="menu-tab"><Link to="/page1">熱門影片</Link></li>
            <li className="menu-tab"><Link to="/page2">精選影片</Link></li>
          </ul>
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
    const {data} = this.props
    const lists = Object.keys(data).map(key => {
      return {
        date: data[key].date,
        desc: data[key].desc,
        img: data[key].img,
        location: data[key].location,
        title: data[key].title,
        tags: data[key].tags,
        url: data[key].url,
        embed: data[key].embed
      }
    })

    return (
      <div className="Page">
        <h1>熱門影片</h1>
        <ul className="lists">
          {lists.map((list, i) => (
            <li className="list" key={i}>
              <ViewVideo src={list.img} text={list.title} embed={list.embed} />
              <p>{list.desc}</p>
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
function mapStateToProps(state) {
  return {
    data: state.allData.videos
  }
}

render((
  <Provider store={configureStore()}>
    <Router history={browserHistory}>
      <Route path="/" component={connect()(App)}>
        <IndexRoute component={Index}/>
        <Route path="page1" component={connect(mapStateToProps)(Page1)} />
        <Route path="page2" component={Page2} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('main'))
