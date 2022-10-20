import React from 'react';
import Cart from './Cart';
export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className="flex justify-between">
        <iframe
          title="logo"
          src="https://giphy.com/embed/S5zyCins2T0yzaOiCv"
          className="-mt-10"
          width="180"
          height="160"
          frameBorder="0"
        ></iframe>
        <Cart
          state={this.props.state}
          handleDeleteProductFromCart={this.props.handleDeleteProductFromCart}
          handleClickOnCart={this.props.handleClickOnCart}
          handleClickOnCross={this.props.handleClickOnCross}
          addQuantity={this.props.addQuantity}
          reduceQuantity={this.props.reduceQuantity}
        />
      </header>
    );
  }
}
