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

  render() {
    return (
      <>
        <div className="flex">
          {buttonArray.map((button, i) => {
            return (
              <button
                key={i}
                className={
                  this.state.imgSrc.split('.')[0] === button ? 'bg-color' : ''
                }
                type="button"
                onClick={(event) => {
                  let imgName = event.target.innerText;
                  if (imgName == 'pubg') {
                    this.setState({
                      imgSrc: imgName + '.jpeg',
                    });
                  } else {
                    this.setState({
                      imgSrc: imgName + '.jpg',
                    });
                  }
                }}
              >
                {button}
              </button>
            );
          })}
        </div>
        <img
          src={'./assets/' + this.state.imgSrc}
          alt={this.state.imgSrc.split('.')[0]}
        />
      </>
    );
  }
}

export default App;
