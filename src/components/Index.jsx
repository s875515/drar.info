import React, {Component, PropTypes} from 'react';
import ViewVideo from './ViewVideo';
import CheckVideo from './checkVideo';
import fetchData from '../actions';
import {connect} from 'react-redux';


class Table extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
  }
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
        <h1>影片列表</h1>
        <table className="table">
          <thead>
              <tr>
                  <th className="th">#</th>
                  <th className="th">標題</th>
                  <th className="th">網址</th>
                  <th className="th">審核</th>
                  <th className="th">詳細</th>
              </tr>
          </thead>
          <tbody>
             {lists.map((list, i) => (
              <tr key={i}>
                    <th className="tbTh">
                      {list.date}
                    </th>
                    <td className="td _center">
                      {list.title}
                    </td>
                    <td className="td">
						          <a href={list.url} target="_blank">{list.url}</a>
                    </td>
                    <td className="td _center">
                    	<CheckVideo />
                    </td>
                    <td className="td _center">
                    	<ViewVideo src={list.img} text={list.title} embed={list.embed} />
                    </td>
              </tr>
            ))}              
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  data: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    data: state.allData.videos
  };
}

export default connect(mapStateToProps ,{ fetchData })(Table);
