import React, {Component, PropTypes} from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import style from './style';
import CommentBox from './CommentBox';

export default class ViewVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleOpen = this.handleOpen.bind(this);
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
      <div className={style.youtube}>
        <img src={this.props.img} onClick={this.handleOpen} />
        <Dialog
          title={this.props.title}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <iframe
          className={style.youtube_embed} src={`https://www.youtube.com/embed/${this.props.embed}`}
          frameBorder='0'
        />
      <CommentBox id={this.props.id}/>

        </Dialog>
      </div>
    );
  }
}

ViewVideo.propTypes = {
  embed: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
