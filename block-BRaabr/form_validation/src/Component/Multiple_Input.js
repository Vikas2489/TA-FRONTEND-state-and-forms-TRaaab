import React from 'react';

class MultipleInput extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <>
        <div className="flex justify-center">
          <form action="#" className="inline-block rounded bg-slate-300 p-3">
            <div className="my-2">
              <label htmlFor="name">Your Name :-</label>
              <input type="text" id="name" />
            </div>
            <div className="my-2">
              <label htmlFor="date">Date Input :-</label>
              <input type="date" id="date" />
            </div>
            <div className="my-2">
              <label htmlFor="file">File Input :-</label>
              <input type="file" id="file" />
            </div>
            <div className="my-2">
              <label htmlFor="read_only">Read Only Input :-</label>
              <input
                type="text"
                id="read_only"
                value="this can only be copied"
                readOnly
                disabled
              />
            </div>
            <div className="my-2 flex align-center">
              <label htmlFor="textarea">Textarea Input :-</label>
              <textarea id="textarea" className="mx-2"></textarea>
            </div>
            <div className="my-2 flex align-center">
              <label htmlFor="textarea_2">Textarea Input Disabled :-</label>
              <textarea id="textarea_2" className="mx-2" disabled></textarea>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default MultipleInput;
