import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class FilterButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      all: false,
      active: true,
      done: false,
    };
  }

  handleToggle = (e) => {
    const newFilterVal = e.target.attributes.getNamedItem('data-key').value;
    // reset toggle
    this.setState({
      all: false,
      active: false,
      done: false,
    });
    // set one as true
    this.setState({ [newFilterVal] : true });
  }

  render() {
    return (
      <Button.Group onClick={this.props.onClick}>
        <Button onClick={this.handleToggle} toggle active={this.state.all} data-key="all">All</Button>
        <Button onClick={this.handleToggle} toggle active={this.state.active} data-key="active">Active</Button>
        <Button onClick={this.handleToggle} toggle active={this.state.done} data-key="done">Done</Button>
      </Button.Group>
    );
  }
}

FilterButtons.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default FilterButtons;
