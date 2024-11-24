import React from "react";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { ProductService } from "../../adapters/api/products/ProductService";

const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const ProductRemoveModal = ({
  isOpen,
  modalMessage,
  isProcessing,
  setModalMessage,
  setIsProcessing,
  onClose,
  productId,
}: {
  isOpen: boolean;
  modalMessage: string;
  isProcessing: boolean;
  setModalMessage: (message: string) => void;
  setIsProcessing: (processing: boolean) => void;
  onClose: () => void;
  productId: string;
}) => {
  const handleConfirmRemove = async () => {
    setModalMessage("Efetuando remoção....");
    setIsProcessing(true);
    try {
      await ProductService.delete(productId);
      setModalMessage("Produto apagado com sucesso");
    } catch (error) {
      console.error("Erro ao remover produto:", error);
      setModalMessage("Ops! Não foi possível remover o produto!");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={isProcessing ? undefined : onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={modalStyle}>
        <Box
          id="modal-title"
          sx={{
            fontSize: "18px",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          {modalMessage}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "16px",
          }}
        >
          {modalMessage === "Tem certeza que deseja remover?" && (
            <Button
              variant="contained"
              color="error"
              onClick={handleConfirmRemove}
            >
              SIM
            </Button>
          )}
          <Button variant="outlined" onClick={onClose} disabled={isProcessing}>
            VOLTAR
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
