import React, { Component } from "react";
import globalStyles from "../Assets/global-styles/bootstrap.min.module.css";
import cx from "classnames";
import classes from "./Search.module.css";

import Aux from "../hoc/Aux";
import Profile from "../Profile/Profile";
import profileClasses from "../Profile/Profile.module.css";

import { getRepos, getUserData } from "../Utilities/github-api";

class Search extends Component {
  state = {
    showResults: false,
    data: [],
    dataOrg: {},
    term: '',
    type: 'user',
  };

  termChangedHandler = event => {

    this.setState({ term: event.target.value });
  };

  submitSearchTermHandler = event => {
    event.preventDefault();
    if (this.state.type === "user") {
      
      getRepos(this.state.term).then(response => {
        this.setState({ data: response, showResults: true, dataOrg: {}});

      });
    
    } 
    if(this.state.type === "organization") {
      
      getUserData(this.state.term).then(response => {
        this.setState({ dataOrg: response, showResults: true, data: [] });

      });
        
      }
  };

  selectTypeOfSearch = (event) => {
    this.setState({type: event.target.value});
  };

  render() {
    let results = null;
    if (this.state.showResults && this.state.type === 'user') {
      results = (
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
      results = (<div className={cx(globalStyles['col-md-12'], classes.emptyRepos)}>
        No Results Found!
      </div>);
    }

    if (this.state.showResults && this.state.type === "organization") {

      results = <ul className={cx(globalStyles["col-md-12"], classes.search__list)}>
          <li className={cx(globalStyles.row, profileClasses.profile)}>
            <h3 className={cx(classes.profile__title, globalStyles["col-md-6"])}>
              <a href={this.state.dataOrg.user.repos_url}>
                {this.state.dataOrg.user.repos_url}
              </a>
            </h3>
            <div
              className={cx(
                classes.profile__title,
                globalStyles["col-md-6"]
              )}
            >
              {this.state.dataOrg.user.login}
            </div>
          </li>
        </ul>;
    }

    return (

        <Aux>
          <form onSubmit={this.submitSearchTermHandler}>
            <section className={cx( classes.search, globalStyles.row )}>
              <input type="text" value={this.state.term} placeholder="Search github..." className={cx(
                  classes["search__input"],
                  globalStyles["col-md-3"]
                )}
                onChange={this.termChangedHandler} />
                <input type="submit" value="Search" className={cx(
                classes["search__btn"],
                globalStyles["col-md-auto"],
                globalStyles["offset-md-1"],
                globalStyles.btn,
                globalStyles["btn-primary"]
              )}
              disabled={this.state.term === ''} />

              
            </section>
            
            <section className={cx(classes.search__options, globalStyles.row)}>
  
                <label className={cx(globalStyles['col-md-2'])} htmlFor="user">
                  User: <input type="radio" name="user" value="user" 
                  checked={this.state.type === 'user'} onChange={this.selectTypeOfSearch} />
                </label>

                <label className={cx(globalStyles['col-md-2'])} htmlFor="organization">
                  Organization: <input type="radio" name="organization" value="organization"
                  checked={this.state.type === 'organization'} onChange={this.selectTypeOfSearch} />
                </label>
                
            </section>
          </form>
  
          <section className={cx( classes.search__results, globalStyles.row )}>
            <div className={cx(globalStyles["col-md-12"])}>
              <h3 className={cx(globalStyles.row, classes.search__counter)}>
                <span className={cx(globalStyles["col-md-12"])}>
                  {this.state.type === 'user' ? this.state.data.length : 1} repository results
                </span>
              </h3>
    
              <div className={cx(globalStyles.row)}>
                {results}
              </div>
            </div>
          </section>
        </Aux>
   
    );
  }
}

export default Search;
