import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';
import InputValidation from './InputValidation';
import Firebase from 'firebase';
import style from './style';

function youtubeUrlParser(url) {
  let id = url.match(/\?v=([(\w|\-)*(?!\&)]*)/)[1];
  return {
    img: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    embed: id
  };
}

export default class AddVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      submitText: '送出'
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    switch (name) {
      case 'title':
      case 'location':
      case 'desc':
      case 'tags':
        // console.log(this.state[`${name}Input`].hasFeedback)
        this.setState({[`${name}Input.hasFeedback`]: false});
        break;
      default:
        break;
    }
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleSubmit() {
    const inputRef = Object.keys(this.refs);
    const validationState = inputRef.map(key => {
      return this.refs[key].state.hasFeedback;
    });
    if (validationState.reduce((prev, curr) => prev && curr, true)) {
      let ref = new Firebase('https://drar.firebaseio.com/');
      let {title, location, desc, date, tags, url} =
        inputRef.reduce((prev, curr) => {
          return Object.assign(prev, {[curr]: this.refs[curr].state.value});
        }, {});
      ref.push({
        url,
        img: youtubeUrlParser(url).img,
        embed: youtubeUrlParser(url).embed,
        title,
        location,
        desc,
        tags,
        date,
        comments: []
      }, () => {
        this.setState({
          open: false
        });
      });
    } else {
      this.setState({submitText: '請正確填入所有項目！'});
    }
  }

  handleClose() {
    this.setState({
      open: false,
      submitText: '送出'
    });
  }
  render () {
    return (
      <div>
        <Button bsStyle="default" className={style.add} onClick={this.handleOpen}>發布影片</Button>
        <Modal show={this.state.open} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputValidation label="標題" type="text" name="title" ref="title" placeholder="輸入標題..."/>
            <InputValidation label="地點" type="text" name="location" ref="location" placeholder="台北市"/>
            <InputValidation label="描述" type="text" name="desc" ref="desc" placeholder="很恐怖"/>
            <InputValidation label="日期" type="text" name="date" ref="date" placeholder="yyyy-mm-dd"/>
            <InputValidation label="標籤" type="text" name="tags" ref="tags" placeholder="逗號分隔:tag1, tag2,..."/>
            <InputValidation label="網址" type="text" name="url" ref="url" placeholder="僅支援youtube影片"/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>取消</Button>
            <Button
              bsStyle={this.state.submitText === '送出' ? 'default' : 'danger'}
              onClick={this.handleSubmit}>{this.state.submitText}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
