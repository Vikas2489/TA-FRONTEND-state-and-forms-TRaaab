import React from 'react';

class InputValidations extends React.Component {
  constructor(props) {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      confirm_password: '',
      errors: {
        username: '',
        email: '',
        password: '',
        confirm_password: '',
      },
    };
  }

  validateUrEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  handleInput = ({ target }) => {
    let { name, value } = target;
    let errors = this.state.errors;
    switch (name) {
      case 'username':
        errors[name] =
          value.length < 4 ? 'Username cannot be less than 3 characters' : '';
        break;
      case 'email':
        errors[name] = this.validateUrEmail(value)
          ? ''
          : 'Your email id is not valid';
        break;
      case 'password':
        errors[name] = value.length < 7 ? 'Password cannot be less than 6' : '';
        break;
      case 'confirm_password':
        errors[name] = value
          ? value === this.state.password
            ? ''
            : 'both password fields should match'
          : 'To confirm password this field is required';
        break;
      default:
        break;
    }

    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <>
        <div className="flex justify-center my-3">
          <form action="#" className="inline-block rounded bg-slate-300 p-3">
            <legend className="text-center text-3xl my-4">
              Register with us :-
            </legend>
            <div className="my-2">
              <label htmlFor="username">Your Username :-</label>
              <input
                value={this.state.username}
                onChange={this.handleInput}
                type="text"
                id="username"
                name="username"
                className={this.state.errors.username ? 'red-border' : ''}
              />
              <span className="red-text">{this.state.errors.username}</span>
            </div>
            <div className="my-2">
              <label htmlFor="email">Email :-</label>
              <input
                value={this.state.email}
                onChange={this.handleInput}
                type="email"
                id="email"
                name="email"
                className={this.state.errors.email ? 'red-border' : ''}
              />
              <span className="red-text">{this.state.errors.email}</span>
            </div>
            <div className="my-2">
              <label htmlFor="password">Password :-</label>
              <input
                value={this.state.password}
                onChange={this.handleInput}
                type="password"
                id="password"
                name="password"
                className={this.state.errors.password ? 'red-border' : ''}
              />
              <span className="red-text">{this.state.errors.password}</span>
            </div>

            <div className="my-2 ">
              <label htmlFor="confirm-password">Confirm Password :-</label>
              <input
                value={this.state.confirm_password}
                onChange={this.handleInput}
                type="password"
                id="confirm-password"
                name="confirm_password"
                className={
                  this.state.errors.confirm_password ? 'red-border' : ''
                }
              />
              <span className="red-text">
                {this.state.errors.confirm_password}
              </span>
            </div>
            <button
              className="bg-slate-900 text-white font-semibold py-1 px-3 rounded"
              type="submit"
            >
              submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default InputValidations;
