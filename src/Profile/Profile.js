import React from "react";
import globalStyles from "../Assets/global-styles/bootstrap.min.module.css";
import cx from "classnames";
import classes from "../Profile/Profile.module.css";

import Aux from "../hoc/Aux";

const profile = props => {
  const link = props.fullData.html_url;
  const fullname = props.fullData.full_name;

  return (
    <Aux>
      <h3 className={cx(classes.profile__title, globalStyles["col-md-6"])}>
        <a href={link}>
          {fullname}
        </a>
      </h3>
      <div className={cx(globalStyles["col-md-6"])}>{props.fullData.language}</div>
    </Aux>
  );
};

export default profile;
