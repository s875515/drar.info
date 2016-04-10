import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import VideoList from '../VideoList';
import {setVisibilityFilter} from '../../actions';
import style from './style';

class Index extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {dispatch} = this.props;
    dispatch(setVisibilityFilter('SHOW_ALL'));
  }

  render() {
    const {videos} = this.props;
    return (
      <div className={style.Page}>
        <h1 onClick={this.handleClick} >熱門影片</h1>
        <VideoList videos={videos}/>
      </div>
    );
  }
}

const getVisibleVideos = (videos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return videos;
    default:
      return videos.filter(t => {
        return t.tags.indexOf(filter) !== -1;
      });
  }
};

const mapStateToProps = (state) => {
  return {
    videos: getVisibleVideos(state.videos, state.visibilityFilter)
  };
};

export default connect(mapStateToProps)(Index);
