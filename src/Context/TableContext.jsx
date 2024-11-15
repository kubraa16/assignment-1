import React, { createContext, useContext } from 'react';

const TableContext = createContext();

export const useTableContext = () => useContext(TableContext);

export const TableProvider = ({ children }) => {
  const headers = ["Company", "Contact", "Country"];
  const data = [
    { Company: "Alfreds Futterkiste", Contact: "Maria Anders", Country: "Germany" },
    { Company: "Centro Commercial Moezetuts", Contact: "Maria Anders", Country: "Germany" },
    { Company: "Ernst hendel", Contact: "Francisco Chang", Country: "Mexico" },
    { Company: "Island Trading", Contact: "Helen Bennett", Country: "UK" },
    { Company: "Laughing Bacchus", Contact: "Yoshi Tannamuri", Country: "Canada" },
    { Company: "Magazzini Alimentri ", Contact: "Giovanni Rovelli", Country: "Italy" },
  ];

  return (
    <TableContext.Provider value={{ headers, data }}>
      {children}
    </TableContext.Provider>
  );
};
