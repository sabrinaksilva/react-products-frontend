import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Product } from "../../../domain/Product";

export const ProductListingActions = ({ product }: { product: Product }) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("/products/edit", { state: { product } });
  };

  const handleRemoveClick = () => {
    console.log("Abrindo modal de remoção...");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <div style={{ fontSize: "12px", color: "gray" }}>ID {product.id}</div>
      <Button
        variant="contained"
        color="primary"
        sx={{
          fontSize: "12px",
          padding: "5px 12px",
          marginRight: "5px",
          backgroundColor: "#884d0f",
          "&:hover": {
            backgroundColor: "#3e2305",
          },
        }}
        onClick={handleEditClick}
      >
        EDITAR
      </Button>

      <Button
        variant="contained"
        color="error"
        style={{
          fontSize: "12px",
          padding: "5px 12px",
        }}
        onClick={handleRemoveClick}
      >
        REMOVER
      </Button>
    </div>
  );
};
