import { createContext, useContext, useState } from "react";

const initialValue = {
  values: {
    isInternetOn: false,
  },
};

const PageContext = createContext();

const Provider = ({ children }) => {
  const [page, setPage] = useState(initialValue);

  return (
    <PageContext.Provider value={[page, setPage]}>
      {children}
    </PageContext.Provider>
  );
};

const usePageContext = () => {
  const [page, setPage] = useContext(PageContext);

  return {
    initialValue,
    values: page.values,

    set: ({ values } = {}) => {
      setPage((prevState) => {
        const newValue = { ...prevState };

        if (values !== undefined) Object.assign(newValue.values, values);

        return newValue;
      });
    },
  };
};

export { PageContext, Provider, usePageContext };
