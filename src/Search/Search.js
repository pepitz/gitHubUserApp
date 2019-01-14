import React, { Component } from "react";
import globalStyles from "../Assets/global-styles/bootstrap.min.module.css";
import cx from "classnames";
import classes from "./Search.module.css";

import Profile from '../Profile/Profile';

class Search extends Component {
  state = {
      users: [
          {name: 'Max', age: 28},
          {name: 'Jack', age: 29},
          {name: 'Stephanie', age: 27},
      ],
      showResults: false
  };

  toggleResultsHandler = () => {
    const doesShow = this.state.showResults;
    this.setState({showResults: !doesShow});
  };

  render() {
    return (
      <div className={cx(classes.search, globalStyles.row)}>
        <div className={cx(classes.search__input, globalStyles["col-md-12"], globalStyles.row)}>
          <input
            type="text"
            placeholder="Search github..."
            className={cx(
              classes["search__input--box"],
              globalStyles["col-md-4"],
              globalStyles["offset-md-2"]
            )}
          />
          <button
            className={cx(
              classes["search__input--btn"],
              globalStyles["col-md-auto"],
              globalStyles["offset-md-1"],
              globalStyles.btn,
              globalStyles["btn-primary"]
            )}
            onClick={this.toggleResultsHandler}
          >
            Search
          </button>
        </div>
        <div
          className={cx(
            classes.search__results,
            globalStyles["col-md-12"],
            globalStyles.row
          )}
        >
          <div className={cx(globalStyles["col-md-6"], classes.search__list)}>
            <Profile name={this.state.users[0].name} age={this.state.users[0].age}></Profile>
            <Profile name={this.state.users[1].name} age={this.state.users[1].age}></Profile>
            <Profile name={this.state.users[2].name} age={this.state.users[2].age}></Profile>
          </div>
          <div className={cx(globalStyles["col-md-6"])}>Organiszations</div>
        </div>
      </div>
    );
  }
}

export default Search;
