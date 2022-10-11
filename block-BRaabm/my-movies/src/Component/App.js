import Header from './Header';
import ListOfMovies from './ListOfMovies';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ListOfMovies />
      </>
    );
  }
}
export default App;
