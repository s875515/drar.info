import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import VideoList from '../VideoList';
import {resetVisibilityFilter, removeVisibilityFilter} from '../../actions';
import style from './style';

class Index extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleTagClick = this.handleTagClick.bind(this);
  }

  handleClick() {
    const {dispatch} = this.props;
    dispatch(resetVisibilityFilter());
  }
  handleTagClick(tag) {
    const {dispatch} = this.props;
    dispatch(removeVisibilityFilter(tag));
  }
  render() {
    const {videos, filters} = this.props;
    return (
      <div className={style.Page}>
        {filters.length === 0
          ? <h1>全部影片</h1>
          : filters.map(tag => {
            return (
              <span
                key={tag}
                className={style.tag}
                onClick={this.handleTagClick.bind(this, tag)}
              >
                {`#${tag}`}
              </span>
            );
          })
        }
        <VideoList videos={videos}/>
      </div>
    );
  }
}

const getVisibleVideos = (videos, filters) => {
  switch (filters) {
    case []:
      return videos;
    default:
      return videos.filter(video=>{
        return video.tags.filter(tag=>{
          return filters.indexOf(tag) !== -1;
        }).length === filters.length;
      });
      // return videos.filter(t => {
      //   return t.tags.indexOf(filter) !== -1;
      // });
  }
};

const mapStateToProps = (state) => {
  return {
    videos: getVisibleVideos(state.videos, state.visibilityFilters),
    filters: state.visibilityFilters
  };
};

export default connect(mapStateToProps)(Index);
