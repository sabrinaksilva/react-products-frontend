import React from "react";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useNavigate } from "react-router-dom";
import { ProductTable } from "../../tables/products/ProductsTable";
import { Product } from "../../../domain/Product";
import { ProductRemoveModal } from "../../modals/ProductRemoveModal";

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

  const navigate = useNavigate();

  const handleAccordionChange = (
    event: React.SyntheticEvent,
    expanded: boolean,
  ) => {
    setIsExpanded(expanded);
  };

  const handleEditClick = () => {
    navigate("/products/edit", { state: { product } });
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div style={{ fontSize: "12px", color: "gray" }}>
                ID {product.id}
              </div>
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
          </div>
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
