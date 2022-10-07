import React from 'react';
import ReactDOM from 'react-dom/client';

let buttonArray = ['basketball', 'phone', 'pubg', 'cricket', 'laptop', 'tiger'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: 'basketball.jpg',
    };
  }
  handleClick(state, event) {
    let imgName = event.target.innerText;
    // event.target.classList.add(['bg-sky-500/75']);
    if (imgName == 'pubg') {
      this.setState({
        imgSrc: imgName + '.jpeg',
      });
    } else {
      this.setState({
        imgSrc: imgName + '.jpg',
      });
    }
  }

  render() {
    return (
      <>
        <div className="flex justify-around py-5">
          {buttonArray.map((button, i) => {
            return (
              <button
                key={i}
                className="block py-2 px-3 bg-black text-white rounded"
                type="button"
                onClick={(event) => this.handleClick(this.state, event)}
              >
                {button}
              </button>
            );
          })}
        </div>
        <img
          src={'assets/' + this.state.imgSrc}
          alt={this.state.imgSrc.split('.')[0]}
        />
      </>
    );
  }
}

export default App;
