import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ProductTable } from "../../tables/products/ProductsTable";
import { Product } from "../../../domain/Product";
import { ProductRemoveModal } from "../../modals/ProductRemoveModal";
import { ProductListingActions } from "./ProductListingActions";

export const ProductAccordionLine = ({
  product,
  index,
}: {
  product: Product;
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = React.useState(true);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalMessage, setModalMessage] = React.useState(
    "Tem certeza que deseja remover?",
  );
  const [isProcessing, setIsProcessing] = React.useState(false);

  const handleAccordionChange = (
    event: React.SyntheticEvent,
    expanded: boolean,
  ) => {
    setIsExpanded(expanded);
  };

  const handleRemoveClick = () => {
    setIsModalOpen(true);
    setModalMessage("Tem certeza que deseja remover?");
    setIsProcessing(false);
  };

  return (
    <>
      <Accordion expanded={isExpanded} onChange={handleAccordionChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${index}-content`}
          id={`panel${index}-header`}
        >
          <ProductHeader product={product} />
        </AccordionSummary>
        <AccordionDetails>
          <ProductTable product={product} />
        </AccordionDetails>
      </Accordion>

      <ProductRemoveModal
        isOpen={isModalOpen}
        modalMessage={modalMessage}
        isProcessing={isProcessing}
        setIsProcessing={setIsProcessing}
        setModalMessage={setModalMessage}
        onClose={() => setIsModalOpen(false)}
        productId={product.id}
      />
    </>
  );
};

const ProductHeader = ({ product }: { product: Product }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div style={{ fontWeight: "bold", fontSize: "16px" }}>
          {product.name}
        </div>
      </div>
      <ProductListingActions product={product} />
    </div>
  );
};
