import React from "react";
import { Box, Button } from "@mui/material";
import { useFilterContext } from "../../../../context/products/ProductsFilterContext";

export const FilterButton: React.FC = () => {
  const { productName, productDescription, setShouldFilter } =
    useFilterContext();

  const handleFilter = () => {
    setShouldFilter(true);
    console.log("FilterButton handleFilter:", {
      productName,
      productDescription,
    });
  };

  return (
    <Box className="MuiBox-logOutButton">
      <Button
        variant="contained"
        color="primary"
        sx={{
          fontSize: "14px",
          padding: "10px 20px",
          backgroundColor: "#884d0f",
          "&:hover": {
            backgroundColor: "#3e2305",
          },
        }}
        onClick={handleFilter}
      >
        Filtrar
      </Button>
    </Box>
  );
};
