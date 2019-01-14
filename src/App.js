import React, { Component } from 'react';
import baseStyles from '../src/Assets/styles/base.module.css';
import globalStyles from '../src/Assets/global-styles/bootstrap.min.module.css';
import cx from 'classnames';

import Header from './Header/header';

class App extends Component {
  render() {
    return (
      <div className={cx(baseStyles.base, globalStyles['container-fluid'])}>
        <Header />
        <div className="search row">
          <div className="col-lg-6">Users</div>
          <div className="col-lg-6">Organiszations</div>
        </div>
      
      </div>
    );
  }
}

export default App;
