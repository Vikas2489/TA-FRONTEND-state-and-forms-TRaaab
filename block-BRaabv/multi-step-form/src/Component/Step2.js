import React from 'react';
class Step2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.currentStep !== 2) {
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
              <span className="bg-slate-200 px-3 py-1 mr-1 text-slate-500 rounded-md  inline-block">
                3
              </span>
              Checkbox
            </p>
          </header>
          <p className="text-xs mb-1" style={{ color: 'grey' }}>
            Step 2/3
          </p>
          <h1 className="font-extrabold text-2xl">Message</h1>
          <div className="mt-8">
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              className="rounded-lg px-2 text-sm mb-7 py-3"
              name="message"
              value={this.props.state.message}
              id="mesage"
              cols="30"
              rows="10"
              placeholder="Write us a message"
              onChange={this.props.handleChange}
            ></textarea>
            <hr />
            <div className="flex items-center space-x-4 my-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className=""
                  name="numberOne"
                  id="numberOne"
                  value={this.props.state.numberOne}
                  checked={this.props.state.numberOne ? true : false}
                  className="h-3 w-3 rounded"
                  onChange={this.props.handleChange}
                />
                <label htmlFor="numberOne" className="mb-0 ml-1 text-xs">
                  The number one choice
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className=""
                  name="numberTwo"
                  id="numberTwo"
                  className="h-3 w-3 rounded"
                  value={this.props.state.numberTwo}
                  onChange={this.props.handleChange}
                  checked={this.props.state.numberTwo ? true : false}
                />
                <label htmlFor="numberTwo" className="mb-0 ml-1 text-xs">
                  The number Two choice
                </label>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default Step2;
