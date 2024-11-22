import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import * as React from "react";
import { ProductTable } from "./ProductsTable";
import { Product } from "../../domain/Product";

export const ProductAccordionLine = ({
  product,
  index,
}: {
  product: Product;
  index: number;
}) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${index}-content`}
        id={`panel${index}-header`}
      >
        {product.name}
      </AccordionSummary>
      <AccordionDetails>
        <ProductTable product={product} index={index} />
      </AccordionDetails>
    </Accordion>
  );
};
