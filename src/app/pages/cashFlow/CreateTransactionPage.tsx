import * as React from "react";
import { Box, Button } from "@mui/material";
import { MainContainer } from "../../components/containers/shared/MainContainer";
import { TransactionForm } from "../../components/forms/transactions/TransactionForm";

export const CreateTransactionPage = () => {
  const [transaction, setTransaction] = React.useState({
    date: "",
    productId: "",
    type: "",
    productQuantity: 0,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Transaction created:", transaction);
  };

  return (
    <MainContainer
      width="150vh"
      height="70vh"
      title="NOVA TRANSAÇÃO"
      paddingX={8}
      paddingY={4}
    >
      <Box component="form" onSubmit={handleSubmit}>
        <TransactionForm
          transaction={transaction}
          setTransaction={setTransaction}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#884d0f",
            color: "#fff",
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#3e2305",
            },
          }}
          type="submit"
        >
          Salvar
        </Button>
      </Box>
    </MainContainer>
  );
};
