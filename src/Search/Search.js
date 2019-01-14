import React, { Component } from "react";
import globalStyles from "../Assets/global-styles/bootstrap.min.module.css";
import cx from "classnames";
import classes from "./Search.module.css";

import Aux from "../hoc/Aux";
import Profile from "../Profile/Profile";
import profileClasses from "../Profile/Profile.module.css";

import { getRepos } from "../Utilities/github-api";

class Search extends Component {
  state = {
    showResults: false,
    data: [],
    term: ''
  };

  termChangedHandler = event => {
    // console.log("[STATE] after [INPUT]=> onChange:", this.state.term);
    this.setState({ term: event.target.value });
  };

  submitSearchTermHandler = () => {
    getRepos(this.state.term).then(response=>{
      this.setState({ data: response, showResults: true });
      
      // console.log('[STATE] after [BUTTON] => submitSearchTerm:', this.state.data);
    });
  };

  render() {
    let results_users = null;
    if (this.state.showResults) {
      results_users = (
        <ul className={cx(globalStyles["col-md-12"], classes.search__list)}>
          {this.state.data.map((el, index) => {
            return (
              <li
                key={index}
                className={cx(globalStyles.row, profileClasses.profile)}
              >
                <Profile fullData={el} owner={el.owner} />
              </li>
            );
          })}
        </ul>
      );
    }

    if(!this.state.showResults) {
      results_users = (<div className={cx(globalStyles['col-md-12'], classes.emptyRepos)}>
        No Results Found!
      </div>);
    }

    return (

        <Aux>
          <section className={cx( classes.search, globalStyles.row )}>
            <input type="text" placeholder="Search github..." className={cx(
                classes["search__input"],
                globalStyles["col-md-4"]
              )}
              onChange={this.termChangedHandler} />
  
            <button className={cx(
                classes["search__btn"],
                globalStyles["col-md-auto"],
                globalStyles["offset-md-1"],
                globalStyles.btn,
                globalStyles["btn-primary"]
              )}
              onClick={this.submitSearchTermHandler}
            >
              Search
            </button>
          </section>
  
          <section className={cx( classes.search__results, globalStyles.row )}>
            <div className={cx(globalStyles["col-md-12"])}>
              <h3 className={cx(globalStyles.row, classes.search__counter)}>
                <span className={cx(globalStyles["col-md-12"])}>
                  {this.state.data.length} repository results
                </span>
              </h3>
    
              <div className={cx(globalStyles.row)}>
                {results_users}
                <div className={cx(globalStyles["col-md-12"])}>Organizations</div>
              </div>
            </div>
          </section>
        </Aux>
   
    );
  }
}

export default Search;
