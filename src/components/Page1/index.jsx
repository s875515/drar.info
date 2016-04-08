import React, {Component, PropTypes} from 'react';
import ViewVideo from '../ViewVideo';
import {connect} from 'react-redux';
import style from './style';

class Page1 extends Component {
  render() {
    const {data} = this.props;
    const lists = data.map(item => {
      return {
        date: item.date,
        desc: item.desc,
        img: item.img,
        location: item.location,
        title: item.title,
        tags: item.tags,
        url: item.url,
        embed: item.embed
      };
    });

    return (
      <div className={style.Page}>
        <h1>熱門影片</h1>
        <ul className={style.lists}>
          {lists.map((list, i) => (
            <li className={style.list} key={i}>
              <ViewVideo src={list.img} text={list.title} embed={list.embed} />
              <p>{list.desc}</p>
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
