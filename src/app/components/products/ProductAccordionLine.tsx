import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import * as React from "react";

export const ProductAccordionLine = ({
  productName,
}: {
  productName: string;
}) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {productName}
      </AccordionSummary>
      <AccordionDetails>Caracterísiticas do {productName}</AccordionDetails>
    </Accordion>
  );
};
