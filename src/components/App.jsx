import React, {Component, PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Link} from 'react-router';
import CheckVideo from './checkVideo';
import {connect} from 'react-redux';
import {fetchData} from '../actions';
import '../style/app';
import FlatButton from 'material-ui/lib/flat-button';

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.logOut = this.logOut.bind(this)
  }
  componentDidMount() {
    let {dispatch} = this.props;
    dispatch(fetchData());
  }
  logOut() {
    alert('log out')
  }

  render() {
    return (
      <div>
        <div className="breadcrumbs">
          <h1><Link to="/">行車紀錄器分享平台管理系統</Link></h1>
          <div className="logOut">
            <FlatButton onClick={this.logOut}>log out</FlatButton>
          </div>
        </div>
        <div>
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
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
};

export default connect()(App);
