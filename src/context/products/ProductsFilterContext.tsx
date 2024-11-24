import React, { createContext, useContext, useState } from "react";

interface FilterContextProps {
  productName: string;
  productDescription: string;
  setProductName: (name: string) => void;
  setProductDescription: (description: string) => void;
  shouldFilter: boolean;
  setShouldFilter: (should: boolean) => void;
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [shouldFilter, setShouldFilter] = useState(false);

  return (
    <FilterContext.Provider
      value={{
        productName,
        productDescription,
        setProductName,
        setProductDescription,
        shouldFilter,
        setShouldFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
};
