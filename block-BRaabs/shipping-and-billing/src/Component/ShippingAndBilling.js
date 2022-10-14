import React from 'react';
class ShippingAndBilling extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      postal_code: '',
      city: '',
      country: '',
      errors: {
        address: '',
      },
      sameAsShipping: false,
      billing_address: '',
      billing_postal_code: '',
      billing_city: '',
      billing_country: '',
    };
  }
  handleInput = ({ target }) => {
    let { name, value } = target;
    let errors = this.state.errors;
    switch (name) {
      case 'address':
        errors[name] = value.length < 8 ? `You need to enter at-least 8` : '';
        break;
      default:
        break;
    }

    if (this.state.sameAsShipping === true) {
      this.setState({
        [name]: value,
        ['billing' + '_' + [name]]: value,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };
  render() {
    return (
      <>
        {/* // shipping */}
        <div className="flex basis1/2 justify-center my-3">
          <form action="#" className="inline-block rounded bg-slate-300 p-3">
            <legend className="text-center text-3xl my-4">
              Shipping Address :-
            </legend>
            <div className="my-2">
              <label htmlFor="address">Address :-</label>
              <input
                value={this.state.address}
                onChange={this.handleInput}
                type="text"
                id="address"
                name="address"
                className={this.state.errors.address ? 'red-border' : ''}
              />
              <span className="text-red-600 text-sm">
                {this.state.errors.address}
              </span>
            </div>
            <div className="my-2">
              <label htmlFor="postal_code">ZIP/Postal Code :-</label>
              <input
                value={this.state.postal_code}
                onChange={this.handleInput}
                type="text"
                id="postal_code"
                name="postal_code"
                // className={}
              />
            </div>
            <div className="my-2">
              <label htmlFor="city">City</label>
              <input
                value={this.state.city}
                onChange={this.handleInput}
                type="text"
                id="city"
                name="city"
                // className={}
              />
            </div>

            <div className="my-2 ">
              <label htmlFor="country">Country</label>
              <input
                value={this.state.country}
                onChange={this.handleInput}
                type="text"
                id="country"
                name="country"
                // className={}
              />
            </div>
            <button
              className="bg-slate-900 text-white font-semibold py-1 px-3 rounded"
              type="submit"
            >
              submit
            </button>
          </form>
        </div>
        {/* // billing */}
        <div className="flex basis1/2 justify-center my-3">
          <form action="#" className="inline-block rounded bg-slate-300 p-3">
            <legend className="text-center text-3xl my-4">
              Billing Address :-
            </legend>
            <div className="my-2">
              <input
                onChange={(e) =>
                  this.setState(
                    (prevState) => {
                      return {
                        sameAsShipping: !prevState.sameAsShipping,
                      };
                    },
                    (updatedState) => {
                      if (this.state.sameAsShipping === true) {
                        this.setState({
                          billing_address: this.state.address,
                          billing_postal_code: this.state.postal_code,
                          billing_city: this.state.city,
                          billing_country: this.state.country,
                        });
                      } else {
                        this.setState({
                          billing_address: '',
                          billing_postal_code: '',
                          billing_city: '',
                          billing_country: '',
                        });
                      }
                    }
                  )
                }
                type="checkbox"
                name="sameAsShipping"
                id="shipping"
              />
              <label htmlFor="shipping">Same as shipping address:- </label>
            </div>

            <div className="my-2">
              <label htmlFor="billing_address">Address :-</label>
              <input
                value={this.state.billing_address}
                onChange={this.handleInput}
                type="text"
                id="billing_address"
                name="billing_address"
                className={
                  this.state.errors.address
                    ? this.state.billing_address === this.state.address
                      ? 'red-border'
                      : ''
                    : ''
                }
              />
              <span className="text-red-400">
                {this.state.errors.address
                  ? this.state.billing_address === this.state.address
                    ? this.state.errors.address
                    : ''
                  : ''}
              </span>
            </div>
            <div className="my-2">
              <label htmlFor="billing_postal_code">ZIP/Postal Code :-</label>
              <input
                value={this.state.billing_postal_code}
                onChange={this.handleInput}
                type="text"
                id="billing_postal_code"
                name="billing_postal_code"
              />
            </div>
            <div className="my-2">
              <label htmlFor="billing_city">City</label>
              <input
                value={this.state.billing_city}
                onChange={this.handleInput}
                type="text"
                id="billing_city"
                name="billing_city"
              />
            </div>

            <div className="my-2 ">
              <label htmlFor="billing_country">Country</label>
              <input
                value={this.state.billing_country}
                onChange={this.handleInput}
                type="text"
                id="billing_country"
                name="billing_country"
                // className={}
              />
            </div>
            <button
              className="bg-slate-900 text-white font-semibold py-1 px-3 rounded"
              type="submit"
            >
              submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default ShippingAndBilling;
