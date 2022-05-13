import styled from "styled-components";

const DivPageOne = styled.div`
  background-color: ${({ isInternetOn }) =>
    !isInternetOn ? "#FF0000" : "#00FF00"};
  height: calc(100vh - 100px);
`;

const DivPageTwo = styled.div`
  background-color: ${({ isInternetOn }) =>
    isInternetOn ? "#FC9003" : "#0000FF"};
  height: calc(100vh - 100px);
`;

export { DivPageOne, DivPageTwo };
