import React from "react";
import { AppRoutes } from "./routes";

export const App = () => {
  return (
    // <ThemeProvider theme={AppTheme}>
    //   <CssBaseline />
    //   <GlobalStyles
    //     styles={{
    //       body: { backgroundColor: "0d1b2b" },
    //     }}
    //   />
    <AppRoutes />
    // </ThemeProvider>
  );
};
