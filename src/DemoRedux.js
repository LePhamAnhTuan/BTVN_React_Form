import React, { Component } from "react";
import { connect } from "react-redux";

class DemoRedux extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="container">
          <h2>thay doi ho ten</h2>
          <p>{this.props.hoTen}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              const action = {
                type: "DOITEN",
                payload: "lephamanhtuan",
              };
              this.props.dispatch(action);
            }}
          >
            doi ten
          </button>
        </div>
      </div>
    );
  }
}
const mapSateToProps = (state) => {
  return {
    hoTen: state.hoTen,
  };
};
const ReduxComponent = connect(mapSateToProps)(DemoRedux);
export default ReduxComponent;
