import React from 'react';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <li
        style={{
          boxShadow:
            'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
        }}
        onMouseEnter={() => this.props.handleMouseEnter(this.props.index)}
        onMouseLeave={this.props.handleMouseLeave}
        className="text-center basis-[29%] bg-white relative mb-12"
      >
        <figure>
          <img
            src={'/static/products/' + this.props.product.sku + '_1' + '.jpg'}
            alt={this.props.product.style}
          />
        </figure>
        <span
          className={
            this.props.product.isFreeShipping
              ? 'absolute top-0 right-0 text-white font-thin text-xs p-1'
              : ''
          }
          style={{ background: '#1B1A20' }}
        >
          {this.props.product.isFreeShipping ? 'Free Shipping' : ''}
        </span>
        <h2 className="py-2 text-sm font-bold px-4 leading-6">
          {this.props.product.title}
        </h2>
        <div className="line_container mt-2 mb-6">
          <div className="yellow_line "></div>
        </div>
        <p className="text-2xl font-bold">
          <span className="text-sm mr-1 font-normal">
            {this.props.product.currencyFormat}
          </span>
          {this.props.product.price}
          {/* <span className="text-xl font-thin">.90</span> */}
        </p>
        <button
          style={
            this.props.state.activeIndex === this.props.index
              ? { background: '#EBC12F', fontWeight: 'normal' }
              : { background: '#000000' }
          }
          onClick={() => this.props.handleClickOnAddToCart(this.props.index)}
          className="btn block py-2.5 font-thin mt-7  text-white w-full"
          type="button"
        >
          Add to cart
        </button>
      </li>
    );
  }
}
