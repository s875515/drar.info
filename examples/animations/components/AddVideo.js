import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import TextField from 'material-ui/lib/text-field';

export default class AddVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      url: '',
      title: '',
      location: '',
      desc: '',
      tags: [],
      date: ''
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleSubmit() {
    let url = this.refs.url.getValue(),
        title = this.refs.title.getValue(),
        location = this.refs.location.getValue(),
        desc = this.refs.desc.getValue(),
        tags = this.refs.tags.getValue(),
        date = this.refs.date.getDate()

    this.setState({
      open: false,
      url: url,
      title: title,
      location: location,
      desc: desc,
      tage: tags,
      date: date
    });
  }

  handleClose() {

    this.setState({open: false});
  }
  render() {
    const actions = [
      <FlatButton
        label="取消"
        secondary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="發布"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleSubmit}
      />
    ];
    return (
      <div>
        <RaisedButton label="發布影片" onClick={this.handleOpen} />
        <Dialog
          title="影片資訊"
          titleStyle={{textAlign: "center"}}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
          contentStyle={{height: '30%'}}
          bodyStyle={{textAlign: 'center'}}
        >
          <TextField
            hintText="http://www.youtube.com/example"
            floatingLabelText="網址"
            ref="url"
          /><br/>
          <TextField
             hintText="標題..."
             floatingLabelText="標題"
             ref="title"
           /><br/>
           <TextField
              hintText="台北市"
              floatingLabelText="地點"
              ref="location"
            /><br/>
          <TextField
             hintText="Description..."
             floatingLabelText="描述"
             ref="desc"
           /><br/>
          <TextField
            hintText="Tag1, Tag2, Tag3"
            floatingLabelText="標籤"
            ref="tags"
          /><br/>
          <DatePicker
           hintText="Date"
           floatingLabelText="日期"
           ref="date"
          />
        </Dialog>
      </div>
    );
  }
}
