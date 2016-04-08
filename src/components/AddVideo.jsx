import React, {Component} from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import Firebase from 'firebase';

function youtubeUrlParser(url) {
  let id = url.match(/\?v=(.*)/)[1];
  return {
    img: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    embed: id
  };
}

export default class AddVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleSubmit() {
    let ref = new Firebase('https://drar.firebaseio.com/');
    let date = this.refs.date.getValue(),
      desc = this.refs.desc.getValue(),
      location = this.refs.location.getValue(),
      tags = this.refs.tags.getValue().split(',').map(word => word.replace(/\s/g, '')),
      title = this.refs.title.getValue(),
      url = this.refs.url.getValue();

    ref.push({
      url: url,
      img: youtubeUrlParser(url).img,
      embed: youtubeUrlParser(url).embed,
      title: title,
      location: location,
      desc: desc,
      tags: tags,
      date: date
    }, () => {
      this.setState({
        open: false
      });
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
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="發布"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleSubmit}
      />
    ];
    return (
      <div>
        <RaisedButton label="發布影片" onTouchTap={this.handleOpen} />
        <Dialog
          title="影片資訊"
          titleStyle={{textAlign: 'center'}}
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
          <TextField
           hintText="yyyy-mm-dd"
           floatingLabelText="日期"
           ref="date"
          />
        </Dialog>
      </div>
    );
  }
}
