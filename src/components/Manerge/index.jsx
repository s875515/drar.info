import React, {Component, PropTypes} from 'react';
import ViewVideo from './ViewVideo';
import CheckVideo from '../CheckVideo';
import {connect} from 'react-redux';
import CSSModules from 'react-css-modules';
import globalStyles from '../../style/app';
import styles from './styles.css';

class Table extends Component {
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
      <div styleName="Page">
        <h1>影片列表</h1>
        <table styleName="table">
          <thead>
              <tr>
                  <th width="60%" styleName="header th" >標題</th>
                  <th width="20%" styleName="header th" >網址</th>
                  <th width="10%" styleName="header th" >審核</th>
                  <th width="10%" styleName="header th" >詳細</th>
              </tr>
          </thead>
          <tbody>
             {lists.map((list, i) => (
              <tr key={i}>
                    <td styleName="td tdTit">
                      {list.title}
                    </td>
                    <td styleName="td _center">
						          <img src={list.img} />
                    </td>
                    <td styleName="td _center">
                    	<CheckVideo />
                    </td>
                    <td styleName="td _center">
                    	<ViewVideo src={list.img} tag={list.tags} area={list.location} text={list.title} embed={list.embed} date={list.date}　desc={list.desc} />
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
    data: state.videos
  };
}
const allStyle = Object.assign({}, styles, globalStyles);
const cssTable = CSSModules(Table, allStyle , {allowMultiple: true});
export default connect(mapStateToProps)(cssTable);
