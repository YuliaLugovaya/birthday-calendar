import React, { FC, Suspense, lazy } from "react";
import { routes } from "config/routes";
import { useLocationScrollToTop } from "hooks/useLocationScrollToTop";
import { Route, Routes } from "react-router-dom";
import { Layout } from "pages/Layout";

const HomePage = lazy(() => import("pages/HomePage"));

export const PageRoot: FC = () => {
  useLocationScrollToTop();
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path={routes.home.root} element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
