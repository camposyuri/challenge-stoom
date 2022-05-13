import React from "react";

import { usePageContext } from "../context/PageContext";

import { DivPageOne } from "../utils/styles";

const PageOne = () => {
  const { values: pageValues, set: setPageContext } = usePageContext();

  const handleInternet = () => {
    setPageContext({ values: { isInternetOn: !pageValues.isInternetOn } });
  };

  return (
    <DivPageOne isInternetOn={pageValues.isInternetOn}>
      <h1>Hello World PageOne</h1>

      <button onClick={handleInternet}>Mudar cor</button>
    </DivPageOne>
  );
};

export default PageOne;
