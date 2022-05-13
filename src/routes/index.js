import React from "react";

import { Routes, Route } from "react-router-dom";

import Menu from "../layouts/Menu";
import PageOne from "../pages/PageOne";
import PageThree from "../pages/PageThree";
import PageTwo from "../pages/PageTwo";

const RoutesComponents = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<PageOne />} />
          <Route path="pageTwo" element={<PageTwo />} />
          <Route path="pageThree" element={<PageThree />} />
        </Route>
      </Routes>
    </>
  );
};

export default RoutesComponents;
