import React from 'react';
import Header from './Header';
import Sizes from './Sizes';
import Products from './Products';
import allProductsObj from '../data';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: '',
      selectedSize: [],
      cart: [],
      clickedOnCart: false,
    };
  }
  handleClickOnAddToCart = (index) => {
    let product = allProductsObj.products[index];
    this.setState((prevState) => {
      let indexOfTheProduct = prevState.cart.findIndex(
        (p) => p.title === product.title
      );
      if (indexOfTheProduct == -1) {
        return {
          cart: prevState.cart.concat({
            availableSizes: product.availableSizes,
            price: product.price,
            sku: product.sku,
            style: product.style,
            title: product.title,
            quantity: 1,
          }),
        };
      } else if (indexOfTheProduct !== -1) {
        return {
          cart: prevState.cart.map((p, i) => {
            if (i === indexOfTheProduct) {
              p.quantity = p.quantity + 1;
              return p;
            } else {
              return p;
            }
          }),
        };
      }
    });
  };
  handleMouseEnter = (index) => {
    this.setState({
      activeIndex: index,
    });
  };
  handleMouseLeave = () => {
    this.setState((prevState) => {
      return {
        activeIndex: '',
      };
    });
  };
  handleClickOnSizeButton = (size) => {
    this.setState((prevState) => {
      if (!prevState.selectedSize.includes(size)) {
        return {
          selectedSize: prevState.selectedSize.concat(size),
        };
      } else if (prevState.selectedSize.includes(size)) {
        return {
          selectedSize: prevState.selectedSize.filter((s) => s != size),
        };
      }
    });
  };
  handleClickOnCart = () => {
    this.setState((prevState) => {
      return {
        clickedOnCart: true,
      };
    });
  };
  addQuantity = (index) => {
    let product = this.state.cart[index];
    console.log('clicked on plus button', product);
    return this.setState({
      cart: this.state.cart.map((p) => {
        if (p === product) {
          p.quantity = p.quantity + 1;
          return p;
        } else {
          return p;
        }
      }),
    });
  };
  reduceQuantity = (index) => {
    let product = this.state.cart[index];

    return this.setState({
      cart: this.state.cart.map((p) => {
        if (p === product) {
          p.quantity = p.quantity - 1;
          return p;
        } else {
          return p;
        }
      }),
    });
  };
  handleClickOnCross = () => {
    this.setState((prevState) => {
      return {
        clickedOnCart: false,
      };
    });
  };
  handleDeleteProductFromCart = (product) => {
    this.setState({
      cart: this.state.cart.filter((p) => p.title !== product.title),
    });
  };
  render() {
    return (
      <>
        <Header
          state={this.state}
          handleDeleteProductFromCart={this.handleDeleteProductFromCart}
          handleClickOnCross={this.handleClickOnCross}
          handleClickOnCart={this.handleClickOnCart}
          addQuantity={this.addQuantity}
          reduceQuantity={this.reduceQuantity}
        />
        <div className="flex m-auto container w-[1000px]">
          <Sizes
            selectedSize={this.state.selectedSize}
            handleClickOnSizeButton={this.handleClickOnSizeButton}
          />
          <Products
            state={this.state}
            handleClickOnAddToCart={this.handleClickOnAddToCart}
            handleMouseEnter={this.handleMouseEnter}
            handleMouseLeave={this.handleMouseLeave}
          />
        </div>
      </>
    );
  }
}
