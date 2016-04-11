import React, {Component, PropTypes} from 'react';
import {addVisibilityFilter} from '../../actions';
import {connect} from 'react-redux';
import style from './style';

class Tag extends Component {
  constructor(props) {
    super(props);
    this.handleTagClick = this.handleTagClick.bind(this);
  }
  handleTagClick() {
    const {tag} = this.props;
    const {dispatch} = this.props;
    dispatch(addVisibilityFilter(tag));
  }
  render() {
    const {tag, children} = this.props;
    return (
      <div className={style.tag}>
        <span
          onClick={this.handleTagClick}
          name={tag}
        >
          {children}
        </span>
      </div>
    );
  }
};

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect()(Tag);
