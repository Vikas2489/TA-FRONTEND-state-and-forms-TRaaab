import Header from './Header';
import Category from './Category';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Header />
        <Category />
      </>
    );
  }
}

export default App;
