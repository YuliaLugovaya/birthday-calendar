import React, { FC, Suspense, lazy } from "react";
import { routes } from "config/routes";
import { useLocationScrollToTop } from "hooks/useLocationScrollToTop";
import { Route, Routes } from "react-router-dom";
import { Layout } from "pages/Layout";
import { AddEvent } from "pages/DatePage/components/AddEvent";
import { EditEvent } from "pages/DatePage/components/EditEvent";
import { DayEvents } from "components/DayEvents";

const HomePage = lazy(() => import("pages/HomePage"));
const DatePage = lazy(() => import("pages/DatePage"));
const BirthdayPage = lazy(() => import("pages/BirthdayPage"));

export const PageRoot: FC = () => {
  useLocationScrollToTop();
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path={routes.home.root} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={`${routes.home.date.root}`} element={<DatePage />}>
            <Route path={`${routes.home.date.day}`} element={<DayEvents />}>
              <Route
                path={`${routes.home.date.addEvent}`}
                element={<AddEvent />}
              />
              <Route
                path={`${routes.home.date.editEvent}`}
                element={<EditEvent />}
              />
            </Route>
          </Route>
          <Route
            path={`${routes.home.allBirthdays}`}
            element={<BirthdayPage />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
