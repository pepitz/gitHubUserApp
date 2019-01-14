import React from "react";
import globalStyles from "../Assets/global-styles/bootstrap.min.module.css";
import cx from "classnames";

import Aux from '../hoc/Aux';

const profile = props => {
  return (
    <Aux>
      <div className={cx(globalStyles["col-md-6"])}>{props.name}</div>
      <div className={cx(globalStyles["col-md-6"])}>{props.age}</div>
    </Aux>
  );
};

export default profile;
