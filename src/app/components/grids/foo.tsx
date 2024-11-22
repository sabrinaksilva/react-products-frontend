import React from "react";
import { useLocation } from "react-router-dom";
import { Container } from "@mui/material";

export const Foo = () => {
  const location = useLocation();

  const { subItemLabel, subItemLocation } = location.state || {};

  return (
    <Container>
      subItemLabel = {subItemLabel}, subItemLocation = {subItemLocation}
    </Container>
  );
};
