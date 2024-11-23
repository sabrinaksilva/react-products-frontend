import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Paper, Divider } from "@mui/material";

const ContainerPaperItem = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  lineHeight: "10px",
}));

interface MainContainerProps {
  width: string;
  height: string;
  title: string;
  children: React.ReactNode;
  paddingX?: number;
  paddingY?: number;
}

export const MainContainer: React.FC<MainContainerProps> = ({
  width,
  height,
  title,
  children,
  paddingX = 4,
  paddingY = 4,
}) => {
  return (
    <ContainerPaperItem
      elevation={4}
      square={false}
      sx={{
        width,
        height,
        paddingX,
        paddingY,
        backgroundColor: "#F3EBDE",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          paddingBottom: 2,
          textAlign: "left",
        }}
      >
        <h1
          style={{
            fontWeight: "bold",
            color: "#884d0f",
            fontSize: "24px",
            margin: 20,
          }}
        >
          {title}
        </h1>
        <Divider sx={{ marginTop: 5, borderColor: "#884d0f" }} />
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          gap: 3,
        }}
      >
        {children}
      </Box>
    </ContainerPaperItem>
  );
};
