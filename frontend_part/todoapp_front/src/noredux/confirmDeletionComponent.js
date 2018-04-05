import React from 'react';
import { Button, Confirm } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class ConfirmDeletion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  // show confirmation box
  show = () => this.setState({ open: true })

  // to handle deletion
  handleConfirm = () => {
    // call function
    this.props.handleDeletionClick();

    // close the box
    this.setState({ open: false });
  }

  // close the box
  handleCancel = () => this.setState({ open: false })

  render() {
    return (
      <div>
        <Button
          color='google plus'
          floated='right'
          icon='remove'
          onClick={this.show}
          size='mini'
        />
        <Confirm className="conf"
          open={this.state.open}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
          content="Are you sure to remove this task?"
          confirmButton="Yes, please"
          cancelButton="No"
        />
      </div>
    )
  }
}

ConfirmDeletion.propTypes = {
  handleDeletionClick: PropTypes.func.isRequired,
};

export default ConfirmDeletion;
