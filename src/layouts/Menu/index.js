import React from "react";

import { Link, Outlet } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">PageOne</Link>
          </li>
          <li>
            <Link to="/pageTwo">PageTwo</Link>
          </li>
          <li>
            <Link to="/pageThree">PageThree</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Menu;
