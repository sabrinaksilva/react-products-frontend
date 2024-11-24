import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 150,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
  borderRadius: "16px",
}));

const elevation = 8;

export const StockIndicatorCard = ({
  topText,
  midText,
  bottomText,
  boxWidth,
}: {
  topText: string;
  midText: string;
  bottomText: string;
  boxWidth: string;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 2,
        width: boxWidth,
      }}
    >
      <Item
        elevation={elevation}
        sx={{ backgroundColor: "#884d0f", width: "100%" }}
      >
        <Box
          sx={{
            fontSize: "1rem",
            textAlign: "left",
            width: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            color: "white",
          }}
        >
          {topText}
        </Box>
        <Box
          sx={{
            fontSize: "3rem",
            fontWeight: "bold",
            textAlign: "center",
            width: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            color: "white",
          }}
        >
          {midText}
        </Box>
        <Box
          sx={{
            fontSize: "0.75rem",
            textAlign: "center",
            width: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            color: "#f7d5a9",
          }}
        >
          {bottomText}
        </Box>
      </Item>
    </Box>
  );
};
