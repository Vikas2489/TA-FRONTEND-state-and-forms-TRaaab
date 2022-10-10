import React from 'react';
import questionArray from '../question';

class QuestionAndAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeQuestion: '',
      activeAnswer: '',
    };
  }
  showAnswer(question, answer) {
    this.setState({
      activeQuestion: this.state.activeQuestion === question ? '' : question,
      activeAnswer: this.state.activeAnswer === answer ? '' : answer,
    });
  }
  render() {
    return (
      <>
        <ul className="container m-auto h-96 flex flex-col justify-evenly">
          {questionArray.map((question, i) => {
            return (
              <li
                key={i}
                className=" rounded px-5 py-2  text-white my-4"
                style={{ background: '#318CD8' }}
              >
                <h1 className="text-2xl text-black flex justify-between border-b-2 border-b-rose-50">
                  {question.Q}
                  <button
                    onClick={() => this.showAnswer(question.Q, question.A)}
                    type="button"
                  >
                    {this.state.activeAnswer === question.A
                      ? 'Your Answer 👇🏻 '
                      : 'Click here for Answer ☝🏻'}
                  </button>
                </h1>
                {this.state.activeAnswer === question.A ? (
                  <p className="mt-4 text-lg ">{this.state.activeAnswer}</p>
                ) : (
                  ''
                )}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default QuestionAndAnswer;
