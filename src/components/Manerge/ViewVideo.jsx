import React, {Component, PropTypes} from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

export default class ViewVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  render() {
    const actions = [
      <FlatButton
        label="關閉"
        secondary={true}
        onClick={this.handleClose}
      />
    ];

    return (
      <div>
        <RaisedButton src={this.props.src} onClick={this.handleOpen.bind(this)}>詳細</RaisedButton>
        <Dialog
          title={this.props.text}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <iframe
          styleName="youtube-embed" src={`https://www.youtube.com/embed/${this.props.embed}`}
          frameBorder='0' />
        <ul>
          <li><b>地點：</b>{this.props.area}</li>
          <li><b>描述：</b>{this.props.desc}</li>
          <li><b>日期：</b>{this.props.date}</li>
          <li><b>標籤：</b>{this.props.tag}</li>
        </ul>
        </Dialog>
      </div>
    );
  }
}

ViewVideo.propTypes = {
  embed: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CSSModules(ViewVideo, styles);
