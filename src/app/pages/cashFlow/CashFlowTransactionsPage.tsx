import { MainContainer } from "../../components/containers/shared/MainContainer";
import { CashFlowBox } from "../../components/containers/cashFlow/CashFlowBox";
import { Box, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TransactionsServiceMock } from "../../adapters/api/mock/TransactionsServiceMock";
import { Transaction } from "../../domain/Transaction";

export const CashFlowTransactionsPage = () => {
  const [transactions, setTransactions] = useState<Transaction[] | null>(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      const data = await TransactionsServiceMock.getAll();
      setTransactions(data);
    };

    fetchTransactions();
  }, []);

  return (
    <MainContainer
      width="150vh"
      height="100%"
      title="FLUXO DE CAIXA - CONTROLE DE TRANSAÇÕES"
      paddingX={8}
      paddingY={4}
    >
      {transactions ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
            height: "100%",
          }}
        >
          <CashFlowBox transactions={transactions} />
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </MainContainer>
  );
};
