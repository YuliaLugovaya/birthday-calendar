import React, { Suspense, FC } from "react";
import { Outlet } from "react-router-dom";
import { PageHeader } from "./components/PageHeader";
import { PageFooter } from "./components/PageFooter";
import { Box } from "@mui/material";

export const Layout: FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <PageHeader />
      <Suspense fallback={null}>
        <Box component="main" sx={{ flex: "1 1 auto" }}>
          <Outlet />
        </Box>
      </Suspense>
      <PageFooter />
    </Box>
  );
};
