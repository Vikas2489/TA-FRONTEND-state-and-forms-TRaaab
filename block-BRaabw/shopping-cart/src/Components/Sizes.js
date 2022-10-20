import React from 'react';
import allProductsObj from '../data';

let allSizes = allProductsObj.products
  .filter((product) => product.availableSizes)
  .reduce((acc, cv) => {
    acc = acc.concat(cv.availableSizes);
    return acc;
  }, []);

allSizes = [...new Set(allSizes)];

export default class Sizes extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="basis-[25%] flex content-start flex-wrap">
        <h1 className="basis-full font-bold  mb-3">Sizes :</h1>
        {allSizes.map((size, i) => {
          return (
            <button
              type="button"
              onClick={() => {
                this.props.handleClickOnSizeButton(size);
              }}
              key={i}
              className={
                'h-10 w-10 flex justify-center items-center my-3 cursor-pointer mr-3 rounded-full leading-10 font-thin p-3 text-xs hover_over_size'
              }
              style={
                this.props.selectedSize.includes(size)
                  ? { background: 'black', color: 'white' }
                  : { background: 'white' }
              }
            >
              {size}
            </button>
          );
        })}
      </div>
    );
  }
}
