import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
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
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleEditClick = () => {
    console.log(`Editing product with ID: ${product.id}`);
  };

  const handleAccordionChange = (
    event: React.SyntheticEvent,
    expanded: boolean,
  ) => {
    setIsExpanded(expanded);
  };

  return (
    <Accordion onChange={handleAccordionChange}>
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
          <Box>{product.name}</Box>
          {isExpanded && (
            <Button
              variant="contained"
              color="primary"
              sx={{
                fontSize: "12px",
                padding: "5px 10px",
                backgroundColor: "#884d0f",
                "&:hover": {
                  backgroundColor: "#3e2305",
                },
              }}
              onClick={handleEditClick}
            >
              EDITAR
            </Button>
          )}
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <ProductTable product={product} index={index} />
      </AccordionDetails>
    </Accordion>
  );
};
