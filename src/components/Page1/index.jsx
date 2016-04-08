import React, {Component, PropTypes} from 'react';
import ViewVideo from '../ViewVideo';
import {connect} from 'react-redux';
import style from './style';

class Page1 extends Component {
  render() {
    const {data} = this.props;

    return (
      <div className={style.Page}>
        <h1>熱門影片</h1>
        <ul className={style.lists}>
          {data.map((item, i) => (
            <li className={style.list} key={i}>
              <ViewVideo {...item} />
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Page1.propTypes = {
  data: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    data: state.videos
  };
}

export default connect(mapStateToProps)(Page1);
