import React from 'react';
import ReactDOM from 'react-dom';
import MultipleInput from './Multiple_Input';
import InputValidations from './Validation';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1 className="text-center py-3 text-3xl">Handling Form</h1>
        {/* <MultipleInput /> */}
        <InputValidations />
      </>
    );
  }
}

export default App;
