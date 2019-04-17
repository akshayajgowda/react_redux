import React from 'react';
import { connect } from "react-redux";
import { addItem } from "../actions/action";

let Button = ({ stateObj,   add, whatsUp }) => (
    <div>
        <h1>{whatsUp}</h1>
      <button onClick={add}>AddME</button>
    </div>
)


const mapStateToProps = state => ({
    whatsUp: state.say,
    stateObj: state
});

const mapDispatchToProps = dispatch => ({
  add: () => {
    dispatch(addItem());
  }
});

Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default Button;
