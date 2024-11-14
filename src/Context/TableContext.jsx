import React, { createContext, useContext } from 'react';

const TableContext = createContext();

export const useTableContext = () => useContext(TableContext);

export const TableProvider = ({ children }) => {
  const headers = ["Company", "Contact", "Country"];
  const data = [
    { Company: "Alfreds Futterkiste", Contact: "Maria Anders", Country: "Germany" },
    { Company: "Centro Commercial Moezetuts", Contact: "Maria Anders", Country: "Germany" },
    { Company: "Alfreds Futterkiste3", Contact: "Maria Anders", Country: "Germany" },
    { Company: "Alfreds Futterkiste4", Contact: "Maria Anders", Country: "Germany" },
    { Company: "Alfreds Futterkiste5", Contact: "Maria Anders", Country: "Germany" },
    { Company: "Alfreds Futterkiste6", Contact: "Maria Anders", Country: "Germany" },
  ];

  return (
    <TableContext.Provider value={{ headers, data }}>
      {children}
    </TableContext.Provider>
  );
};
