import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import { ProductTable } from "../../tables/products/ProductsTable";
import { Product } from "../../../domain/Product";

export const ProductAccordionLine = ({
  product,
  index,
}: {
  product: Product;
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = React.useState(true);
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("/products/edit", { state: { product } });
  };

  const handleAccordionChange = (
    event: React.SyntheticEvent,
    expanded: boolean,
  ) => {
    setIsExpanded(expanded);
  };

  return (
    <Accordion expanded={isExpanded} onChange={handleAccordionChange}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${index}-content`}
        id={`panel${index}-header`}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Box sx={{ fontWeight: "bold", fontSize: "16px" }}>
              {product.name}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Box
              sx={{
                fontSize: "12px",
                color: "gray",
              }}
            >
              ID {product.id}
            </Box>
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
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <ProductTable product={product} />
      </AccordionDetails>
    </Accordion>
  );
};
