import React from "react";
import { Button } from "@mui/material";

interface INavigationButtonProps {
  label: string;
  onClick: () => void;
}

export const TopBarButton: React.FC<INavigationButtonProps> = ({
  label,
  onClick,
}) => {
  const handleClick = (): void => {
    onClick?.();
  };

  return (
    <Button
      color="inherit"
      sx={{
        fontSize: "14px",
        fontWeight: "bold",
        textTransform: "none",
      }}
      onClick={handleClick}
    >
      {label}
    </Button>
  );
};
