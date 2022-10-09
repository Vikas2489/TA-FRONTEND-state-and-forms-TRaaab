import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button
        type="button"
        className={this.props.className}
        onClick={this.props.onClick}
      >
        {this.props.button}
      </button>
    );
  }
}

export default Button;
