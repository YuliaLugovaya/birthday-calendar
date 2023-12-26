/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnyAction } from "redux";
import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

const localStorageMiddleware: Middleware =
  (store) => (next: any) => (action: AnyAction) => {
    next(action);
    const state: RootState = store.getState();
    window.localStorage.setItem("adventCalendar", JSON.stringify(state));
  };

export default localStorageMiddleware;
