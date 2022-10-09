import React from 'react';
import Button from './Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      step: 0,
      max: '',
    };
  }
  handleIncreament = () => {
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
  handleDecreament = () => {
    if (this.state.step === 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    } else {
      this.setState({
        counter: this.state.counter - this.state.step,
      });
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
          {[5, 10, 15].map((step) => {
            return (
              <Button
                key={step}
                className={this.state.step === step ? 'selected' : ''}
                onClick={this.selectSteps}
                button={step}
              />
            );
          })}
        </div>
        <h2>Max</h2>
        <div className="flex">
          {[15, 100, 200].map((max) => {
            return (
              <Button
                key={max}
                className={this.state.max === max ? 'selected' : ''}
                onClick={this.selectMax}
                button={max}
              />
            );
          })}
        </div>
        <div>
          <Button
            key={'Increament'}
            onClick={this.handleIncreament}
            button={'Increament'}
          />
          <Button
            key={'Decreament'}
            onClick={this.handleDecreament}
            button={'Decreament'}
          />
          <Button key={'Reset'} onClick={this.handleReset} button={'Reset'} />
        </div>
      </>
    );
  }
}

export default App;
