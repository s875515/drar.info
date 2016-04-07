import React, {Component, PropTypes} from 'react';
import ViewVideo from './ViewVideo';
import {connect} from 'react-redux';

class Page1 extends Component {
  render() {
    const {data} = this.props;
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
      };
    });

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
    );
  }
}

Page1.propTypes = {
  data: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    data: state.allData.videos
  };
}

export default connect(mapStateToProps)(Page1);
