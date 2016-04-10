import React, {Component, PropTypes} from 'react';
import Firebase from 'firebase';
import {Input} from 'react-bootstrap';
import style from './style';

export default class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.refFirebase = new Firebase('https://drar.firebaseio.com/');
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  handleKeyDown(e) {
    if (e.which === 13) {
      const comments = this.props.comments[0] === 'no comment now' ? [] : this.props.comments;
      this.refFirebase.child(this.props.id).update({
        comments: comments.concat(this.state.text)
      });
      this.setState({text: ''});
    }
  }
  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    let comments = this.props.comments.map((comment, index) => {
      return (
        <li key={index}>{comment}</li>
      );
    });
    return (
      <div>
        <Input
          type="text"
          ref="input"
          placeholder="留言..."
          value={this.state.text}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      <ul className={style.comments}>
        {comments}
      </ul>
      </div>
    );
  }
}

CommentBox.propTypes = {
  comments: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired
};

CommentBox.defaultProps = {
  comments: ['no comment now']
};
