import React, { Component } from "react";
import Family from "../HocComponent";

const mydetail = {
  type: "infant",
  myage: "2months",
  rashi: "vrishik"
};
class KukuHoc extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const xx = { ...this.props.mydetail };
    return (
      <div>
        <section class="jumbotron text-center">
          <div class="container">
            <h1 class="jumbotron-heading">Album example</h1>
            <h2>my name is Kuku and my age is {this.props.age} </h2>
            <button onClick={this.props.double} className="btn btn-primary my-2">
              Fire Kuku: {this.props.age}
            </button>
                <p>{xx.type}</p>
                <p>{xx.myage}</p>
                <p>{xx.rashi}</p>
            <p class="lead text-muted">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don't simply skip over it entirely.
            </p>
            
          </div>
        </section>
      </div>
    );
  }
}

export default Family(KukuHoc, mydetail);
