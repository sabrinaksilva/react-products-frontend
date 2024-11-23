import { MainContainer } from "../../components/containers/shared/MainContainer";
import { CashFlowBox } from "../../components/containers/cashFlow/CashFlowBox";
import { Box } from "@mui/material";

export const CashFlowTransactionsPage = () => {
  return (
    <MainContainer
      width="150vh"
      height="100vh"
      title="FLUXO DE CAIXA - CONTROLE DE TRANSAÇÕES"
      paddingX={8}
      paddingY={4}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <CashFlowBox />
      </Box>
    </MainContainer>
  );
};
