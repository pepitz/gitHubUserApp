import React from 'react';
import classes from './Spinner.module.css';
import cx from 'classnames';


const spinner = (props) => {
    return (<div className={cx(classes.spinner)}>
        <div className={classes.spinner_container}>
            <span className={classes['spinner_container--logo']}>
                <img src={require('../Assets/icons/LoadingIndicator.png')} alt=""/>
            </span>
            <span className={classes['spinner_container--title']}>Loading...</span>
        </div>
    </div>);
};

export default spinner;