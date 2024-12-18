import { Container } from "@mui/material";
import { ProductsList } from "./ProductsList";

export const ProductListingSection = () => {
  return (
    <Container
      sx={{
        padding: "8px",
        margin: "8px auto",
      }}
    >
      <ProductsList />
    </Container>
  );
};
