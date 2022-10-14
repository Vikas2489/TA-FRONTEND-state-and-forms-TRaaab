import React from 'react';
import ShippingAndBilling from './ShippingAndBilling';
// import Billing from './Billing';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="flex flex-wrap justify-evenly">
        <h1 className="basis-full text-center text-3xl font-semibold my-6">
          Controlled Form Components
        </h1>
        <ShippingAndBilling />
        {/* <Billing /> */}
      </div>
    );
  }
}

export default App;
