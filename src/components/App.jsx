import React, {Component, PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Link} from 'react-router';
import AddVideo from './AddVideo';
import {connect} from 'react-redux';
import {fetchData} from '../actions';
import '../style/app';

class App extends Component {
  constructor(props) {
    super(props);
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
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
};

export default connect()(App);
