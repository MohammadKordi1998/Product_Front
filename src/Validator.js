/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";

const Validator = (props) => {
  return (
    <Fragment>
      {props.isValid == true && (
        <p style={{ color: "red", fontSize: "13px" }}>{props.text}</p>
      )}
    </Fragment>
  );
};

export default Validator;
