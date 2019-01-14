
import React from "react";
import classes from './Header.module.css';
import globalStyles from '../Assets/global-styles/bootstrap.min.module.css';
import cx from 'classnames';

const header = () => {
  return (
    <header className={cx(classes.header, globalStyles.row)}>
      <span className={cx(classes.header__logo, globalStyles['col-md-2'])}>Logo
      </span>
      <div className={cx(classes.header__text, globalStyles['col-md-9'])}>Github User App</div>
    </header>
  );
};

export default header;
