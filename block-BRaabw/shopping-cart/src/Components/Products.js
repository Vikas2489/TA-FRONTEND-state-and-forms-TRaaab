import React from 'react';
import Product from './Product';
import allProductsObj from '../data';

export default class Products extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.state.selectedSize.length === 0) {
      return (
        <div className="basis-[70%]">
          <div className="flex justify-between items-center">
            <p className="mb-3">16 Product(s) found</p>
            <select
              className="font-normal mb-6 inline-block px-5 py-1 text-sm rounded-md "
              style={{ color: '#1B1A20' }}
            >
              <option value="highest to lowest">Highest To Lowest</option>
              <option value="lowest to highest">Lowest To Highest</option>
            </select>
          </div>
          <ul className="flex flex-wrap justify-between items-center">
            {allProductsObj.products.map((product, index) => {
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
    } else {
      for (
        let index = 0;
        index < this.props.state.selectedSize.length;
        index++
      ) {
        let element = this.props.state.selectedSize[index];
        var productsAccToSize = allProductsObj.products.filter((product) => {
          if (product.availableSizes.includes(element)) {
            return product;
          }
        });
      }
      return (
        <div className="basis-[70%]">
          <div>
            <p className="mb-3">{productsAccToSize.length} Product(s) found</p>
            <select name="">
              <option value="highest to lowest">Highest To Lowest</option>
              <option value="lowest to highest">Lowest To Highest</option>
            </select>
          </div>

          <ul className="flex flex-wrap justify-evenly items-center">
            {productsAccToSize.map((product, index) => {
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
}
