import Card from './Card';
import React from 'react';
let arrayOfFontNames = [
  `Alkalami,serif`,
  `Oswald,serif`,
  `Poppins,sans-serif`,
  `Roboto,sans-serif`,
  `Source Sans Pro,sans-serif`,
  `Open Sans,sans-serif`,
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      font_size: '48px',
    };
  }
  handleChange = (e) => {
    this.setState({
      text: e.target.value,
      font_size: this.state.font_size,
    });
  };
  handleFontSize = (e) => {
    console.log(e, 'eeeeee');
    this.setState({
      text: this.state.text,
      font_size: e.target.value + 'px',
    });
  };

  render() {
    return (
      <>
        <div className="my-9 flex justify-center items-center">
          <input
            type="text"
            className="border-2 rounded-xl divide-inherit px-3 py-2"
            onChange={this.handleChange}
          />
          <span className="mx-6">Text size:- {this.state.font_size}</span>
          <input
            type="range"
            min="48"
            onChange={this.handleFontSize}
            max="100"
          />
        </div>
        <div className="container m-auto flex items-center flex-wrap justify-evenly">
          {arrayOfFontNames.map((font) => {
            console.log(font);
            return (
              <Card
                font={font}
                size={this.state.font_size}
                text={this.state.text}
              />
            );
          })}
        </div>
      </>
    );
  }
}
export default App;
