import React, {Component, PropTypes} from 'react';
import {addVisibilityFilter} from '../../actions';
import {connect} from 'react-redux';
import {Modal} from 'react-bootstrap';
import style from './style';
import CommentBox from './CommentBox';

class ViewVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleTagClick = this.handleTagClick.bind(this);
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({
      open: false
    });
  }
  handleTagClick(tag) {
    const {dispatch} = this.props;
    dispatch(addVisibilityFilter(tag));
    this.setState({
      open: false
    });
  }
  render() {
    return (
      <div className={style.youtube}>
        <img src={this.props.img} onClick={this.handleOpen} />
        <Modal show={this.state.open} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              className={style.youtube_embed} src={`https://www.youtube.com/embed/${this.props.embed}`}
              frameBorder='0'
            />
          {this.props.tags.map(tag => {
            return (
              <span
                key={tag}
                className={style.tag}
                onClick={this.handleTagClick.bind(this, tag)}
              >
                {`#${tag}`}
              </span>
            );
          })}
          </Modal.Body>
          <Modal.Footer className={style.modal_footer}>
            <CommentBox comments={this.props.comments} id={this.props.id} />
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

ViewVideo.propTypes = {
  comments: PropTypes.array,
  embed: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array,
  dispatch: PropTypes.func.isRequired
};

export default connect()(ViewVideo);
