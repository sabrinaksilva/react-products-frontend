import * as React from "react";
import { TextField } from "@mui/material";

export const TextInput = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number | string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <TextField label={label} value={value} onChange={onChange} fullWidth />
  );
};
