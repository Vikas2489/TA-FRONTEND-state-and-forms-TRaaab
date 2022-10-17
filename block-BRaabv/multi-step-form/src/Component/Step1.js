import React from 'react';
class Step1 extends React.Component {
  constructor(props) {
    super(props);
  }
  addClassBasedOnErr = () => {
    if (this.props.errors.email) {
      return 'border-red-700 border-solid rounded-md px-1 py-1';
    } else if (!this.props.errors.email) {
      return 'border-slate-300 border-solid rounded-md px-1 py-1';
    }
  };

  render() {
    if (this.props.currentStep !== 1) {
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
              <span className="bg-slate-200 px-3 py-1 mr-1 text-slate-500 rounded-md  inline-block">
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
            Step 1/3
          </p>
          <h1 className="font-extrabold text-2xl">Sign Up</h1>
          <div className="flex flex-wrap items-center  mt-8">
            <div className="basis-48 ">
              <label htmlFor="first_name" className="text-sm">
                First Name
              </label>
              <input
                onChange={this.props.handleChange}
                value={this.props.state.firstName}
                className="border-slate-300  border-solid  rounded-md px-1 py-1"
                type="text"
                name="firstName"
                placeholder="eg : Vikas"
                id="first_name"
              />
            </div>
            <div className="basis-48 margin-left">
              <label htmlFor="last_name" className="text-sm">
                Last Name
              </label>
              <input
                onChange={this.props.handleChange}
                value={this.props.state.lastName}
                type="text"
                name="lastName"
                placeholder="eg : Singh"
                id="last_name"
                className="border-slate-300  border-solid rounded-md px-1 py-1"
              />
            </div>
            <div className="basis-48 my-6">
              <label
                htmlFor="email"
                value={this.props.state.email}
                className={
                  this.props.errors.email ? 'text-sm text-red-700' : 'text-sm'
                }
              >
                Email
              </label>
              <input
                onChange={this.props.handleChange}
                type="email"
                name="email"
                placeholder="eg : 1234user@gmail.com"
                id="email"
                className={this.addClassBasedOnErr()}
              />
              <span className="text-red-700">{this.props.errors.email}</span>
            </div>
            <div className="basis-48 my-6 margin-left">
              <label htmlFor="dateOfBirth" className="text-sm ">
                Date Of Birth
              </label>
              <input
                value={this.props.state.dateOfBirth}
                onChange={this.props.handleChange}
                type="date"
                name="dateOfBirth"
                placeholder="eg : 13th feb 2001"
                id="dateOfBirth"
                className="border-slate-300 border-solid  rounded-md px-1 py-1"
              />
            </div>
            <div className="basis-full">
              <label htmlFor="address" className="block text-sm">
                Address
              </label>
              <input
                value={this.props.state.address}
                onChange={this.props.handleChange}
                type="text"
                name="address"
                placeholder="eg : h no. 42, street no. 7, Shalimar Bagh, NewDelhi"
                id="address"
                className="border-slate-300 border-solid rounded-md px-1 py-1"
              />
            </div>
          </div>
        </>
      );
    }
  }
}

export default Step1;
