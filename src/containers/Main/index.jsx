import React, {Component, PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Header from '../../components/Header';
import {connect} from 'react-redux';
import {fetchData} from '../../actions';
import style from './style';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let {dispatch} = this.props;
    dispatch(fetchData());
  }
  render() {
    return (
        <div className="main-container">
          <Header />
          <ReactCSSTransitionGroup
            transitionName={style}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
            >
            {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
          </ReactCSSTransitionGroup>
        </div>
    );
  }
}

Main.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
};


export default connect()(Main);
