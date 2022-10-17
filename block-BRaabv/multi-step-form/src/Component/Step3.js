import React from 'react';
class Step3 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.currentStep !== 3) {
      return null;
    } else {
      return (
        <>
          <header className="flex space-x-6 border-b-2 border-solid mb-10 border-slate-200 pb-6">
            <p className="text-sm">
              <span
                className="bg-slate-200 px-3 py-1 mr-1 text-slate-500 rounded-md  inline-block"
                style={
                  this.props.currentStep === 1
                    ? { background: '#1882FB', color: 'white' }
                    : {}
                }
              >
                1
              </span>
              Sign up
            </p>
            <p className="text-sm">
              <span
                className="bg-slate-200 px-3 py-1 mr-1 text-slate-500 rounded-md  inline-block"
                style={
                  this.props.currentStep === 2
                    ? { background: '#1882FB', color: 'white' }
                    : {}
                }
              >
                2
              </span>
              Message
            </p>
            <p className="text-sm">
              <span
                className="bg-slate-200 px-3 py-1 mr-1 text-slate-500 rounded-md  inline-block"
                style={
                  this.props.currentStep === 3
                    ? { background: '#1882FB', color: 'white' }
                    : {}
                }
              >
                3
              </span>
              Checkbox
            </p>
          </header>
          <p className="text-xs mb-1" style={{ color: 'grey' }}>
            Step 3/3
          </p>
          <h1 className="font-extrabold text-2xl">Checkbox</h1>
          <div className="mt-8">
            <div className="flex my-2 items-center">
              <input
                type="checkbox"
                name="option1"
                value={this.props.state.opiton1}
                id="choice1"
                className="h-3 w-3 rounded"
                onChange={this.props.handleChange}
                checked={this.props.state.option1 ? true : false}
              />
              <label htmlFor="choice1" className="mb-0 ml-1 text-sm">
                I want to add this option.
              </label>
            </div>
            <div className="flex my-2 items-center">
              <input
                type="checkbox"
                name="option2"
                id="choice2"
                value={this.props.state.opiton2}
                className="h-3 w-3 rounded"
                onChange={this.props.handleChange}
                checked={this.props.state.option2 ? true : false}
              />
              <label htmlFor="choice2" className="mb-0 ml-1 text-sm">
                Let me on this option and check for some cool stuff
              </label>
            </div>
            <div className="flex my-2 items-center">
              <input
                type="checkbox"
                name="option3"
                id="choice3"
                value={this.props.state.opiton3}
                className="h-3 w-3 rounded-full"
                onChange={this.props.handleChange}
                checked={this.props.state.option3 ? true : false}
              />
              <label htmlFor="choice3" className="mb-0 ml-1 text-sm">
                More options
              </label>
            </div>
          </div>
        </>
      );
    }
  }
}

export default Step3;
