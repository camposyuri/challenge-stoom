import React, { useState } from "react";
import { usePageContext } from "../context/PageContext";

import { DivPageTwo } from "../utils/styles";

const PageTwo = () => {
  const { values: pageValues } = usePageContext();

  const [connected, setConnected] = useState(false);

  const handleClick = () => setConnected(!connected);

  return (
    <DivPageTwo isInternetOn={pageValues.isInternetOn}>
      <h1>PageTwo</h1>

      <button onClick={handleClick}>{connected ? "ON" : "OFF"}</button>
    </DivPageTwo>
  );
};

export default PageTwo;
