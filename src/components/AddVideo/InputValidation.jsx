import React, {Component, PropTypes} from 'react';
import {Input} from 'react-bootstrap';

export default class InputValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      validation: 'success',
      hasFeedback: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.setValidationTrue = this.setValidationTrue.bind(this);
    this.setValidationFalse = this.setValidationFalse.bind(this);
  }

  setValidationTrue() {
    this.state = {
      validation: 'success',
      hasFeedback: true
    };
  }

  setValidationFalse() {
    this.state = {
      validation: 'error',
      hasFeedback: true
    };
  }

  handleChange(e) {
    this.setState({value: e.target.value});
    let valid = '';
    switch (e.target.name) {
      case 'tags':
      case 'desc':
      case 'location':
      case 'title':
        if (e.target.value.trim() !== '') {
          this.setValidationTrue();
        } else {
          this.setValidationFalse();
        }
        break;
      case 'url':
        valid = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
        if (valid.test(e.target.value)) {
          this.setValidationTrue();
        } else {
          this.setValidationFalse();
        }
        break;
      case 'date':
        valid = /^\d{4}\-(0?[1-9]|[1][012])\-(0?[1-9]|[12][0-9]|3[01])/;
        if (valid.test(e.target.value)) {
          this.setValidationTrue();
        } else {
          this.setValidationFalse();
        }
        break;
      default:
        break;
    }
    this.setState({
      hasFeedback: true
    });
  }

  render () {
    return (
      <div>
        <Input
          bsStyle={this.state.validation}
          hasFeedback={this.state.hasFeedback}
          label={this.props.label}
          name={this.props.name}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
          ref={this.props.name}
          type={this.props.type}
          value={this.state.value}
       />
      </div>
    );
  }
}

InputValidation.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};
