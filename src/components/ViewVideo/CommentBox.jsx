import React, {Component, PropTypes} from 'react';
import Firebase from 'firebase';

export default class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.refFirebase = new Firebase('https://drar.firebaseio.com/-KEl4-sfJqoAYVij9ok4');
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  handleKeyDown(e) {
    if (e.which === 13) {

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
        <input
          type="text"
          ref="input"
          value={this.state.text}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <ul>{comments}</ul>
      </div>
    );
  }
}

CommentBox.propTypes = {
  comments: PropTypes.array,
  key: PropTypes.string
};

CommentBox.defaultProps ={
  comments: ['no comment now']
}
