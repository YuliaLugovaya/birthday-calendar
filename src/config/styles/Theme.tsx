import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { theme, themeColors } from "./materialUiTheme";

interface IThemeProps {
  children: JSX.Element | JSX.Element[];
}

export const Theme = ({ children }: IThemeProps) => {
  const customTheme = createTheme({ ...theme(), ...themeColors() });
  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
};
