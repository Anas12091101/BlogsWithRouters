import { NavLink } from "react-router-dom";
import { Fragment } from "react";
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
              <NavLink activeClassName={classes.active} to="/welcome" >Welcome</NavLink>
            </li>

            <li>
              <NavLink activeClassName={classes.active} to="/product" >Products</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};

export default MainHeader;
