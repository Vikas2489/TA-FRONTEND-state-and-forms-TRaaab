import React from 'react';
import Product from './Product';
import allProductsObj from '../data';

export default class Products extends React.Component {
  constructor(props) {
    super(props);
  }
  handleProducts = (products, sizes = [], selected) => {
    let sortedProducts = [...products];

    if (sizes.length !== 0) {
      sortedProducts = products.filter((product) => {
        for (const size of sizes) {
          if (product.availableSizes.includes(size)) {
            return true;
          }
        }
      });
    }

    if (selected === 'highestToLowest') {
      return (sortedProducts = sortedProducts.sort(
        (p1, p2) => p2.price - p1.price
      ));
    }
    if (selected === 'lowestToHighest') {
      return (sortedProducts = sortedProducts.sort(
        (p1, p2) => p1.price - p2.price
      ));
    }
  };
  render() {
    let { selectedSize, selected } = this.props.state;
    let allProducts = this.handleProducts(
      allProductsObj.products,
      selectedSize,
      selected
    );
    return (
      <div className="basis-[70%]">
        <div className="flex mb-6 justify-between items-center">
          <p className="content-start">{allProducts.length} Product(s) found</p>
          <select
            className="font-normal inline-block px-5 py-1 text-sm rounded-md "
            style={{ color: '#1B1A20' }}
            onChange={this.props.changeHighestToLowest}
          >
            <option value="highestToLowest">Highest To Lowest</option>
            <option value="lowestToHighest">Lowest To Highest</option>
          </select>
        </div>
        <ul className="flex flex-wrap justify-between items-center">
          {allProducts.map((product, index) => {
            return (
              <Product
                handleMouseEnter={this.props.handleMouseEnter}
                handleMouseLeave={this.props.handleMouseLeave}
                index={index}
                handleClickOnAddToCart={this.props.handleClickOnAddToCart}
                state={this.props.state}
                key={product.sku}
                product={product}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
