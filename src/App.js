import React, { Component } from 'react';
import baseStyles from '../src/Assets/styles/base.module.css';
import globalStyles from '../src/Assets/global-styles/bootstrap.min.module.css';
import cx from 'classnames';

import Header from './Header/Header';
import Search from './Search/Search';

class App extends Component {
  render() {
    return (
      <div className={cx(baseStyles.base, globalStyles['container-fluid'])}>
        <Header />
        <Search />
      </div>
    );
  }
}

export default App;
