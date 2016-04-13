import React, {Component, PropTypes} from 'react';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';

export default class CheckVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
     };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    this.setState({value});
  }

  render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="未審核" />
          <MenuItem value={2} primaryText="待審核" />
          <MenuItem value={3} primaryText="已審核" />
        </DropDownMenu>
      </div>
    );
  }
}
