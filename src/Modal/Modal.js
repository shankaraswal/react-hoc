import React, { Component } from "react";

import "./Modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const xx = { ...this.props.mydetail };

    return (
      <div>
        <div
          className="modal-wrapper"
          style={{
            transform: this.props.show ? "translateY(0vh)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          <div className="modal-header">
            <h2>Modal Header</h2>
            <span className="close-modal-btn" onClick={this.props.close}>
              ×
            </span>
          </div>
          <div className="modal-body">
            <div>
              <h2>my name is Kuku and my age is {this.props.age} </h2>
              <button onClick={this.props.double}>
                Fire Kuku: {this.props.age}
              </button>
              <p>{xx.type}</p>
              <p>{xx.myage}</p>
              <p>{xx.rashi}</p>
            </div>
          </div>
          <div className="modal-footer">
            <p>This is Modal footer</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
