import React from "react";
import globalStyles from "../Assets/global-styles/bootstrap.min.module.css";
import cx from "classnames";
import classes from "./Profile.module.css";

const profile = props => {
  return (
    <div className={cx(classes.profile, globalStyles.row)}>
      <div className={cx(globalStyles["col-md-6"])}>{props.name}</div>
      <div className={cx(globalStyles["col-md-6"])}>{props.age}</div>
    </div>
  );
};

export default profile;
