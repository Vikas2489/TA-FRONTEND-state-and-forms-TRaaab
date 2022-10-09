import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      step: 0,
      max: '',
    };
  }
  handleIncrement = () => {
    if (this.state.max) {
      if (this.state.step === 0) {
        this.setState({
          counter: this.state.counter + 1,
        });
      } else {
        let result = this.state.counter + this.state.step;
        if (result > this.state.max) {
          alert(
            'You cannot increament now anymore because then max value would be exceded by you'
          );
        } else {
          this.setState({
            counter: this.state.counter + this.state.step,
          });
        }
      }
    } else {
      if (this.state.step === 0) {
        this.setState({
          counter: this.state.counter + 1,
        });
      } else {
        this.setState({
          counter: this.state.counter + this.state.step,
        });
      }
    }
  };
  handleDecrement = () => {
    if (this.state.max) {
      if (this.state.step === 0) {
        this.setState({
          counter: this.state.counter - 1,
        });
      } else {
        let result = this.state.counter - this.state.step;
        if (result < this.state.max) {
          return alert(
            'You cannot decreament now anymore because then max value would be exceded by you'
          );
        } else {
          this.setState({
            counter: this.state.counter - this.state.step,
          });
        }
      }
    } else {
      if (this.state.step === 0) {
        this.setState({
          counter: this.state.counter - 1,
        });
      } else {
        this.setState({
          counter: this.state.counter - this.state.step,
        });
      }
    }
  };
  handleReset = () => {
    this.setState({
      counter: 0,
    });
  };
  selectSteps = (e) => {
    let step = Number(e.target.innerText);
    this.setState({
      counter: this.state.counter,
      step: step,
    });
  };
  selectMax = (e) => {
    // setting the max value
    let maxValue = Number(e.target.innerText);
    this.setState({
      counter: this.state.counter,
      step: this.state.step,
      max: maxValue,
    });
  };
  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <hr />
        <h2>Steps</h2>
        <div className="flex">
          <p
            className={this.state.step === 5 ? 'selected' : ''}
            onClick={this.selectSteps}
          >
            5
          </p>
          <p
            className={this.state.step === 10 ? 'selected' : ''}
            onClick={this.selectSteps}
          >
            10
          </p>
          <p
            className={this.state.step === 15 ? 'selected' : ''}
            onClick={this.selectSteps}
          >
            15
          </p>
        </div>
        <h2>Max</h2>
        <div className="flex">
          <p
            className={this.state.max === 15 ? 'selected' : ''}
            onClick={this.selectMax}
          >
            15
          </p>
          <p
            className={this.state.max === 100 ? 'selected' : ''}
            onClick={this.selectMax}
          >
            100
          </p>
          <p
            className={this.state.max === 200 ? 'selected' : ''}
            onClick={this.selectMax}
          >
            200
          </p>
        </div>
        <div>
          <button onClick={this.handleIncrement} type="button">
            increament
          </button>
          <button onClick={this.handleDecrement} type="button">
            decreament
          </button>
          <button onClick={this.handleReset} type="button">
            reset
          </button>
        </div>
      </>
    );
  }
}

export default App;
