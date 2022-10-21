import React from 'react';

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.state.clickedOnCart) {
      return (
        <div
          className="relative cursor-pointer"
          onClick={this.props.handleClickOnCart}
        >
          <span className="w-12 h-12 p-3 block bg-black">
            <img src="/static/bag-icon.png" alt="cart_svg" />
            <span
              className="absolute right-3  bottom-[74px] h-4 leading-4 w-4 text-xs text-center rounded-full"
              style={{ background: '#EBC12F', color: '#1B1A20' }}
            >
              {this.props.state.cart.reduce((acc, cv) => {
                acc += cv.quantity;
                return acc;
              }, 0)}
            </span>
          </span>
        </div>
      );
    } else {
      return (
        <div
          className="h-screen w-[34%] z-50 right-0 fixed overflow-y-scroll"
          style={{ background: '#1A1A21' }}
        >
          <button
            className="text-white text-right w-[60px] rounded-tl-none transition duration-500 ease-in-out hover:bg-white hover:text-black  bg-black rounded-md py-2 px-3"
            type="button"
            onClick={this.props.handleClickOnCross}
          >
            close
          </button>
          <div className="flex justify-center items-center my-10">
            <div className="w-12 h-12 p-3 relative">
              <img src="/static/bag-icon.png" alt="cart_svg" />
              <span
                className="absolute right-2   bottom-1 h-4 leading-4 w-4 text-xs text-center rounded-full"
                style={{ background: '#EBC12F', color: '#1B1A20' }}
              >
                {this.props.state.cart.reduce((acc, cv) => {
                  acc += cv.quantity;
                  return acc;
                }, 0)}
              </span>
            </div>
            <h1 className="text-white text-center text-xl font-bold">Cart</h1>
          </div>

          <ul className=" px-6">
            {this.props.state.cart.length == 0 ? (
              <li className="flex flex-col my-10 justify-center items-center">
                <p style={{ color: 'whitesmoke' }}>
                  Add Some Products in the cart{' '}
                  <span className="block text-center">: )</span>
                </p>
              </li>
            ) : (
              this.props.state.cart.map((product, i) => {
                return (
                  <li
                    key={product.sku}
                    className="flex justify-around items-center border-top  pt-7 pb-4"
                  >
                    <figure className="basis-1/4">
                      <img
                        src={'/static/products/' + product.sku + '_2.jpg'}
                        width="100%"
                        alt={i}
                      />
                    </figure>
                    <div className="self-center basis-2/4">
                      <h3 className="text-white">{product.title}</h3>
                      <p className="font-thin" style={{ color: '#4A484C' }}>
                        {product.style}
                      </p>
                      <p className="font-thin" style={{ color: '#4A484C' }}>
                        Quantity: {product.quantity}
                      </p>
                    </div>
                    <div className="self-start">
                      <button
                        type="button"
                        onClick={() =>
                          this.props.handleDeleteProductFromCart(product)
                        }
                        className="w-4 text-center bg-white rounded-full hover:bg-gray-300"
                      >
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/2723/2723639.png"
                          alt="sdf"
                        />
                      </button>
                      <p style={{ color: '#BB9927' }} className="my-5">
                        {product.price}
                      </p>
                      <div>
                        <button
                          className="w-1 text-white inline-flex justify-center items-center px-3 bg-black  "
                          type="button"
                          onClick={() => this.props.reduceQuantity(i)}
                          disabled={product.quantity === 1 ? 'disabled' : ''}
                        >
                          -
                        </button>
                        <button
                          className="w-1 ml-1 text-white inline-flex justify-center items-center bg-black  px-3 "
                          type="button"
                          onClick={() => this.props.addQuantity(i)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })
            )}
            <li className="border-top pt-8">
              <h3 className="text_color text-l  flex justify-between items-center mb-10">
                Subtotal:
                <span
                  style={{ color: '#EAC12E' }}
                  className="font-thin  text-2xl"
                >
                  $
                  {this.props.state.cart.reduce((acc, cv) => {
                    acc = acc + cv.price * cv.quantity;
                    return acc;
                  }, 0)}
                </span>
              </h3>
              <div className="flex justify-center max-w-full items-center pb-8 ">
                <button
                  className="text-center py-3 w-full rounded text-l font-thin block hover:bg-black text-white"
                  style={{ background: '#0D0A10' }}
                  type="button"
                  onClick={this.props.showTotal}
                >
                  Checkout
                </button>
              </div>
            </li>
          </ul>
        </div>
      );
    }
  }
}
