import React from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      firstName: '',
      lastName: '',
      email: '',
      dateOfBirth: '',
      address: '',
      numberOne: '',
      numberTwo: '',
      message: '',
      option1: '',
      option2: '',
      option3: '',
      errors: {
        email: '',
      },
    };
  }
  validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  handleChange = ({ target }) => {
    console.dir(target, 'this is the target');
    let { name, value } = target;
    let errors = this.state.errors;
    switch (name) {
      case 'email':
        errors[name] = this.validateEmail(this.state.email)
          ? ''
          : 'Invalid email!';
        break;

      default:
        break;
    }

    if (
      name === 'numberOne' ||
      name === 'numberTwo' ||
      name === 'option1' ||
      name === 'option2' ||
      name === 'option3'
    ) {
      this.setState({
        [name]: target.checked ? target.nextElementSibling.innerText : '',
      });
    } else {
      this.setState({ [name]: value });
    }
  };
  handleClickOnNext = () => {
    this.setState((prevState) => {
      return {
        currentStep:
          prevState.currentStep <= 2
            ? prevState.currentStep + 1
            : prevState.currentStep,
      };
    });
  };
  handleClickOnBack = () => {
    this.setState((prevState) => {
      return {
        currentStep:
          prevState.currentStep >= 1
            ? prevState.currentStep - 1
            : prevState.currentStep,
      };
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Bravooooooooo🤘🏻 you registered successfully! 
      fullname: ${this.state.firstName + ' ' + this.state.lastName}, 
      email: ${this.state.email},
      date-of-birth: ${this.state.dateOfBirth}`
    );
  };
  render() {
    return (
      <div
        className="flex items-center  m-auto bg-white rounded-xl my-20"
        style={{ width: '950px', height: '640px' }}
      >
        <figure className="basis-1/3 h-full">
          <img
            src="/images/form_side_pic.png"
            className="h-full object-cover rounded-l-xl"
            alt="form_side_pic"
          />
        </figure>
        {/* master form  */}
        <form action="#" className="basis-2/3 ml-14 px-8 py-12">
          <Step1
            handleChange={this.handleChange.bind(this)}
            currentStep={this.state.currentStep}
            errors={this.state.errors}
            state={this.state}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange.bind(this)}
            state={this.state}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange.bind(this)}
            state={this.state}
          />
          {/* button section */}
          <div className="text-right block mt-9">
            <button
              className={
                this.state.currentStep !== 1
                  ? 'text-black font-bold py-1 px-6 rounded-lg mr-3'
                  : 'hidden'
              }
              type="button"
              onClick={this.handleClickOnBack}
            >
              Back
            </button>
            <button
              className={
                this.state.currentStep < 3
                  ? 'text-white py-1 px-6 rounded-lg'
                  : 'hidden'
              }
              style={{ background: '#1882FB' }}
              onClick={this.handleClickOnNext}
              type="button"
            >
              Next
            </button>
            <button
              className={
                this.state.currentStep === 3
                  ? 'text-white py-1 px-6 rounded-lg'
                  : 'hidden'
              }
              style={{ background: '#1882FB' }}
              onClick={this.handleSubmit}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
